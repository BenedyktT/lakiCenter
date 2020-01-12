const express = require("express");
const app = express();

app.use(express.json({ extended: false }));
app.get("/", (req, res) => {
	res.send("Api Working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server start on port ${PORT}`));
