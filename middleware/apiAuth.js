const otplib = require("otplib");
const atob = require("atob");
const axios = require("axios");
const secret = process.env.API_secret;
axios.defaults.baseURL = "https://api.roomercloud.net";
axios.defaults.headers.common["Promoir-Roomer-Hotel-ApplicationId"] = "HKLAKI";
axios.defaults.headers.common["Promoir-Roomer-Hotel-Identifier"] = "2b72a454";
otplib.totp.options = {
	digits: 8,
	algorithm: "sha256",
	encoding: "hex"
};
module.exports = function(req, res, next) {
	const token = otplib.totp.generate(atob(secret));
	axios.defaults.headers.common["Promoir-Roomer-Hotel-Secret"] = token;
	next();
};
