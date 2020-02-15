const express = require("express");
const router = express.Router();
const axios = require("axios");
const auth = require("../middleware/auth");
const apiAuth = require("../middleware/apiAuth");

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

    const response = await axios.get(
      "services/bookingapi/reservations?stayFromDate=2020-02-15&stayToDate=2020-02-15&includeOutOfOrder=false&includeInvoices=false&modifiedSince=2020-02-15T21:37:32",
      {
        headers: {}
      }
    );
    const data = response.data.reservations.reduce((acc, curr) => {
      acc.push({
        reservationNotes: curr.reservationNotes,
        rooms: curr.rooms.length,
        adults: curr.rooms.reduce(
          (a, c) => {
            return {
              adults: a.adults + c.adults,
              arr: c.dateArrival,
              dep: c.dateDeparture,
              notes: c.roomNotes
            };
          },
          { adults: 0, arr: "", dep: "", notes: "" }
        ),
        arriving: curr.roomsdateArrival,
        departure: curr.dateDeparture
      });

      return acc;
    }, []);

    return res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
