const User = require("../models/User");
const express = require("express");
const router = express.Router();
const axios = require("axios");
const auth = require("../middleware/auth");
const convert = require("xml-js");
const moment = require("moment");
const { google } = require("googleapis");
const privatekey = require("../lakiconnect.js");

router.get(
  "/monthly/:arrival/:departure/:hotel/:rate/",

  async (req, res) => {
    const { arrival, departure, hotel, rate } = req.params;

    try {
      const response = await axios.get(
        `https://api.roomercloud.net/services/bookingapi/availability1?hotel=${hotel}&channelCode=${rate}&channelManagerCode=OWN&arrivalDate=${arrival}&departureDate=${departure}`
      );
      const result = convert.xml2js(response.data, {
        compact: true,
        spaces: 4
      });
      const month = result.availability.inventory.inventoryItem
        .map(e => {
          const availabilityToOccupancy = (baseCode, availability) => {
            let occupancy = 0;
            if (baseCode.includes("DSUP")) occupancy = 20 - availability;
            if (baseCode.includes("QUE")) occupancy = 9 - availability;
            if (baseCode.includes("TWDB")) occupancy = 27 - availability;
            if (baseCode.includes("SUI")) occupancy = 1 - availability;
            if (baseCode.includes("DBL")) occupancy = 39 - availability;
            if (baseCode.includes("ECO")) occupancy = 24 - availability;

            return occupancy;
          };
          const baseCode = e._attributes.availabilityBaseCode;
          return {
            baseCode,
            description: e._attributes.description,
            inventoryCode: e._attributes.inventoryCode,
            availability: e.availabilityAndRates.day.map(x => ({
              date: x._attributes.date,
              availability: x._attributes.availability,
              rate: x._attributes.rate,
              occupancy: availabilityToOccupancy(
                baseCode,
                parseInt(x._attributes.availability)
              )
            }))
          };
        })
        .filter(e =>
          hotel === "KLAUS" ? e.inventoryCode.includes("NRBI") : true
        );
      let total = month
        .map(category =>
          category.availability.map(x => ({
            ...x,
            baseCode: category.baseCode
          }))
        )
        .reduce((acc, curr) => [...acc, ...curr], [])
        .reduce((acc, curr) => {
          const x = acc.find(
            e => e.baseCode === curr.baseCode && e.date === curr.date
          );
          if (!x) {
            return [...acc, curr];
          }
          return acc;
        }, [])
        .reduce((acc, curr, i, arr) => {
          const x = arr.filter(e => e.date === curr.date);
          const y = acc.find(y => y.date === curr.date);
          if (!y) {
            return [
              ...acc,
              x.reduce(
                (a, c) => {
                  return {
                    ...a,
                    date: c.date,
                    rate: (a.rate =
                      parseInt(a.rate) < parseInt(c.rate) &&
                      parseInt(a.rate) > 0
                        ? a.rate
                        : c.rate),
                    occupancy: c.occupancy + a.occupancy
                  };
                },
                { rate: 0, occupancy: 0 }
              )
            ];
          } else return acc;
        }, []);
      return res.json(total);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
);

router.get("/:arrival/:departure/:hotel/", auth, async (req, res) => {
  const arrival = req.params.arrival;
  const departure = req.params.departure;
  const hotel = req.params.hotel || process.env.Hotel;
  if (!arrival || !departure) {
    res.status(404).json("include arrival and departure date");
  }
  try {
    const rate = req.rate || "TRAVEL";
    const response = await axios.get(
      `https://api.roomercloud.net/services/bookingapi/availability1?hotel=${hotel}&channelCode=${rate}&channelManagerCode=OWN&arrivalDate=${arrival}&departureDate=${departure}`
    );
    const result = convert.xml2js(response.data, {
      compact: true,
      spaces: 4
    });
    const currency = result.availability._attributes.currencyCode;
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
          rate: e.room.rate,
          currency
        };
      });

    res.json(availability);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

router.get(
  "/admin/:arrival/:departure/:hotel/:rate",
  auth,
  async (req, res) => {
    const arrival = req.params.arrival;
    const departure = req.params.departure;
    const hotel = req.params.hotel || process.env.Hotel;
    if (!arrival || !departure) {
      res.status(404).json("include arrival and departure date");
    }
    const user = await User.findById(req.user);
    if (user.name !== "adminlaki") {
      return res.status(401).json("UNAUTHORIZED");
    }
    try {
      const rate = req.params.rate;
      const response = await axios.get(
        `https://api.roomercloud.net/services/bookingapi/availability1?hotel=${hotel}&channelCode=${rate}&channelManagerCode=OWN&arrivalDate=${arrival}&departureDate=${departure}`
      );
      const result = convert.xml2js(response.data, {
        compact: true,
        spaces: 4
      });
      const currency = result.availability._attributes.currencyCode;
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
                available:
                  room.availabilityAndRates.day._attributes.availability,
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
            rate: e.room.rate,
            currency
          };
        });

      res.json(availability);
    } catch (error) {
      console.error(error);
      res.json(error);
    }
  }
);

router.get("/calendar", async (req, res) => {
  let jwtClient = new google.auth.JWT(
    privatekey.client_email,
    null,
    privatekey.private_key,
    ["https://www.googleapis.com/auth/calendar"]
  );
  //authenticate request
  jwtClient.authorize(function(err, tokens) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Successfully connected!");
    }
  });
  //Google Calendar API
  let calendar = google.calendar("v3");
  calendar.events.list(
    {
      auth: jwtClient,
      calendarId: "info.hotellaki@gmail.com"
    },
    function(err, response) {
      if (err) {
        console.log("The API returned an error: " + err);
        return;
      }
      return res.json(response.data);
    }
  );
});

module.exports = router;
