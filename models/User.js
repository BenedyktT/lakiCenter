const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	},
	rate: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("User", userSchema);
