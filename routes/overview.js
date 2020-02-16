const express = require("express");
const router = express.Router();
const axios = require("axios");
const auth = require("../middleware/auth");
const apiAuth = require("../middleware/apiAuth");
const sample = require("./sample.json");

router.get("/", apiAuth, async (req, res) => {
	try {
		/* 	 const res = await axios.get(
			"services/bookingapi/reservations?stayFromDate=2020-02-13&stayToDate=2020-02-14&includeOutOfOrder=false&includeInvoices=false&modifiedSince=2020-02-13T15:55:32"
        );  */

		/* const response = await axios.get(
			"/roomer/openAPI/REST/bookings/roomassignments?partialName=Olli",
			{
				headers: {
					Accept: "application/xml"
				}
			}
		); */

		const xml = sample;
		const response = await axios.post("/roomer/openAPI/REST/bookings", xml, {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			}
		});

		return res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
});

module.exports = router;
