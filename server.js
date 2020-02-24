const express = require("express");

const app = express();
require("dotenv").config();
const connectDB = require("./config/config");
connectDB();
app.use(express.json({ extended: false }));
const path = require("path");
const wakeUpDyno = require("./wakeUpDyno");
const updateCalendar = require("./calendarMap");
var schedule = require("node-schedule");

app.use("/availability", require("./routes/availability"));
app.use("/user", require("./routes/users"));
app.use("/overview", require("./routes/overview"));
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("client/build"));
	app.get("/*", function(req, res) {
		res.sendFile(path.join(__dirname, "build", "index.html"));
	});
}
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/lol", async (req, res) => {
	try {
		const response = await updateCalendar();
		return res.json(response);
	} catch (error) {
		res.status(500).json(error);
	}
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	wakeUpDyno({
		url: "http://laki-avail.herokuapp.com/", // url string
		interval: 60000 * 25 // interval in milliseconds (1 minute in this example)
	}).start();

	console.log(`server start on port ${PORT}`);
});

/* schedule.scheduleJob("5 *1 * * * *", console.log("test")); */
