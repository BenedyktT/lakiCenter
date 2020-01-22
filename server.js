const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/config");
connectDB();
app.use(express.json({ extended: false }));

app.use("/availability", require("./routes/availability"));
app.use("/user", require("./routes/users"));

app.get("/", (req, res) => {
	res.send("Api Working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server start on port ${PORT}`));
