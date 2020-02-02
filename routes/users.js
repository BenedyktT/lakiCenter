const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const axios = require("axios");
var convert = require("xml-js");
const moment = require("moment");
// @route GET api/auth
// @desc
// @access Public
router.get("/", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user).select("-password");
		res.json(user);
	} catch (e) {
		console.error(e.message);
		res.send(500).json({ msg: "server error" });
	}
});

// @route POST api/auth
// @desc login user
// @access Public

router.post(
	"/login",
	[check("password", "password is required").exists()],
	async function(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		console.log(req.body);
		let { name, password } = req.body;
		name = name.trim().toLowerCase();

		try {
			// see if user exists
			let user = await User.findOne({ name });
			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "invalid credentials" }] });
			}
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res
					.status(400)
					.json({ errors: [{ msg: "invalid credentials" }] });
			}
			const payload = {
				user: user.id
			};
			console.log(process.env.jwtSecret);
			jwt.sign(
				payload,
				process.env.jwtSecret,
				{ expiresIn: 860000 },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (e) {
			console.error(e.message);
			res.status(500).send("server error");
		}
	}
);

//@register user post
//@private
router.post(
	"/register",
	auth,
	[
		(check("name", "Name is Required")
			.not()
			.isEmpty(),
		check("password", "Password is required")
			.not()
			.isEmpty())
	],

	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		} else {
			console.log(req.body);
		}
		let { name, password } = req.body;
		name = name.trim().toLowerCase();
		const userName = await User.findById(req.user);
		let isUserExist = await User.findOne({ name });
		if (userName !== "adminlaki") {
			res.status(402).json("Unauthorized");
		}

		try {
			if (isUserExist) {
				res.status(400).json({ errors: [{ msg: "User already exist" }] });
			}

			user = new User({
				name,
				password
			});
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			await user.save();
			res.json(user);
		} catch (error) {
			console.error(error);
			res.status(500).json("Internal Server Error");
		}
	}
);

router.get("/:arrival/:departure/:hotel", async (req, res) => {
	const arrival = req.params.arrival;
	const departure = req.params.departure;
	const hotel = req.params.hotel || process.env.Hotel;
	if (!arrival || !departure) {
		res.status(404).json("include arrival and departure date");
	}
	try {
		const response = await axios.get(
			`https://api.roomercloud.net/services/bookingapi/availability1?hotel=${hotel}&channelCode=HOT&channelManagerCode=OWN&arrivalDate=${arrival}&departureDate=${departure}`,
			{
				headers: { Accept: "*/json" }
			}
		);
		const result = convert.xml2js(response.data, { compact: true, spaces: 4 });
		/* const test = result.availability.inventory.inventoryItem.map(roomType => {
			return [
				{
					desc: roomType._attributes.availabilityBaseCode,
					availability:
						roomType.availabilityAndRates.day._attributes.availability,
					date: roomType.availabilityAndRates.day._attributes.date
				}
			];
		}); */
		/* 	const availability = document.children[1].children.map(child => {
			return {
				room: child.attr.availabilityBaseCode,
				desc: child.attr.description,
				rate: child.children[1].children[0].attr.rate,
				availability: child.children[1].children[0].attr.availability
			};
		}); */
		const availability = result.availability.inventory.inventoryItem.map(
			room => {
				return {
					room: {
						desc: room._attributes.availabilityBaseCode,
						dayAvail: room.availabilityAndRates.day.map(e => ({
							available: e._attributes.availability,
							date: e._attributes.date
						}))
					}
				};
			}
		);
		const test = availability.map(e => {
			return {
				availability: e.room.dayAvail.reduce(
					(acc, curr) => {
						console.log(acc);
						if (curr.available < acc.available) {
							return (acc = curr);
						} else return acc;
					},
					{ available: 40 }
				),
				desc: e.room.desc
			};
		});
		res.json(availability);
	} catch (error) {
		console.error(error);
		res.json(error);
	}
});

module.exports = router;
