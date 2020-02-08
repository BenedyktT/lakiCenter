const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

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
				user: user.id,
				rate: user.rate
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
			.isEmpty()),
		check("rate", "Rates is required")
			.not()
			.isEmpty()
	],

	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		} else {
			console.log(req.body);
		}
		let { name, password, rate } = req.body;
		name = name.trim().toLowerCase();
		const userName = await User.findById(req.user);
		let isUserExist = await User.findOne({ name });
		if (userName.name !== "adminlaki") {
			return res.status(402).json("Unauthorized");
		}

		try {
			if (isUserExist) {
				res.status(400).json({ errors: [{ msg: "User already exist" }] });
			}

			user = new User({
				name,
				password,
				rate
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

module.exports = router;
