const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const moment = require("moment");

const resetPasswordTemplate = require("../middleware/email");
transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_LOGIN,
		pass: process.env.EMAIL_PASSWORD
	}
});

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
//@public
router.post(
	"/register",

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
		}
		let { name, password, rate, email } = req.body;

		name = name.trim().toLowerCase();
		const userName = await User.findById(req.user);
		let isUserExist = await User.findOne({ name });
		if (userName && userName.name !== "adminlaki") {
			try {
				if (isUserExist) {
					res.status(400).json({ errors: [{ msg: "User already exist" }] });
				}

				user = new User({
					name,
					password,
					rate: "TRAVEL",
					email
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

		try {
			if (isUserExist) {
				res.status(400).json({ errors: [{ msg: "User already exist" }] });
			}

			user = new User({
				name,
				password,
				rate,
				email
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

router.post(
	"/forgot-password",
	[check("email", "must be email").isEmail()],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { email } = req.body;

		try {
			let user = await User.findOne({ email });
			if (!user) {
				res
					.status(404)
					.json("We cannot find an account for this email address");
			}
			const payload = {
				id: user.id
			};
			const secret = user.password + "-" + moment(user.date).unix();
			const makeToken = (secret, payload) => {
				return jwt.sign(payload, secret, { expiresIn: 3600 });
			};
			const getPasswordResetURL = (user, token) =>
				`http://localhost:5000/password/reset/${user._id}/${token}`;

			try {
				const token = makeToken(secret, payload);
				const url = getPasswordResetURL(user, token);
				const emailTemplate = resetPasswordTemplate(user, url);

				const sendEmail = () => {
					transporter.sendMail(emailTemplate, (err, info) => {
						if (err) {
							res.status(500).json(err);
							return;
						}
						console.log(`** Email sent **`, info);
					});
				};
				sendEmail();
			} catch (error) {
				res.json("something went wrong");
			}
		} catch (error) {
			res.status(500).json("Internal Server Error");
		}
	}
);

module.exports = router;

//https://ahrjarrett.com/posts/2019-02-08-resetting-user-passwords-with-node-and-jwt
