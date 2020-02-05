var xmldoc = require("xmldoc");
const express = require("express");
const router = express.Router();
const axios = require("axios");
const auth = require("../middleware/auth");
const convert = require("xml-js");
router.get("/", (req, res) => {
	res.json("hello");
});
router.get("/:arrival/:departure/:hotel", auth, async (req, res) => {
	const arrival = req.params.arrival;
	const departure = req.params.departure;
	const hotel = req.params.hotel || process.env.Hotel;
	if (!arrival || !departure) {
		res.status(404).json("include arrival and departure date");
	}
	try {
		const response = await axios.get(
			`https://api.roomercloud.net/services/bookingapi/availability1?hotel=${hotel}&channelCode=HOT&channelManagerCode=OWN&arrivalDate=${arrival}&departureDate=${departure}`
		);
		const result = convert.xml2js(response.data, { compact: true, spaces: 4 });

		const availability = result.availability.inventory.inventoryItem
			.map(room => {
				const isArray = room.availabilityAndRates.day.length;
				const dayAvail = isArray
					? room.availabilityAndRates.day.map(e => ({
							available: e._attributes.availability,
							date: e._attributes.date,
							rate: e._attributes.rate
					  }))
					: {
							available: room.availabilityAndRates.day._attributes.availability,
							date: room.availabilityAndRates.day._attributes.date,
							rate: room.availabilityAndRates.day._attributes.rate
					  };

				return {
					room: {
						desc: room._attributes.inventoryCode,
						dayAvail
					}
				};
			})
			.map(e => {
				const dayAvail = e.room.dayAvail.length
					? e.room.dayAvail.reduce(
							(acc, curr) => {
								if (parseFloat(curr.available) < parseFloat(acc.available)) {
									return {
										...acc,
										available: (acc.available = curr.available),
										rate: Math.floor(
											parseFloat(acc.rate) + parseFloat(curr.rate)
										)
									};
								} else
									return {
										...acc,
										rate: Math.floor(
											parseFloat(acc.rate) + parseFloat(curr.rate)
										)
									};
							},
							{ available: 40, rate: 0 }
					  )
					: {
							available: e.room.dayAvail.available,
							rate: Math.floor(e.room.dayAvail.rate)
					  };
				return {
					dayAvail,
					desc: e.room.desc,
					rate: e.room.rate
				};
			});

		res.json(availability);
	} catch (error) {
		console.error(error);
		res.json(error);
	}
});

module.exports = router;
