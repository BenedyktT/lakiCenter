const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/config");
connectDB();
app.use(express.json({ extended: false }));

app.use("/availability", require("./routes/availability"));
app.use("/user", require("./routes/users"));
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	wakeUpDyno({
		url: "http://laki-avail.herokuapp.com/", // url string
		interval: 60000 * 25 // interval in milliseconds (1 minute in this example)
	}).start();
	console.log(`server start on port ${PORT}`);
});
