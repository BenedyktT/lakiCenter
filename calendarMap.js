const axios = require("axios");
const moment = require("moment");
const { google } = require("googleapis");
const privatekey = require("./lakiconnect.js");

const updateCalendar = async () => {
	try {
		//login
		const data = { name: "adminlaki", password: process.env.adminPass };
		const login = await axios.post("http://localhost:5000/user/login", data, {
			headers: { "Content-Type": "application/json" }
		});
		const today = moment().format("YYYY-MM-DD");
		const monthFromToday = moment()
			.add(10, "day")
			.format("YYYY-MM-DD");
		const res = await axios.get(
			`http://localhost:5000/availability/monthly/${today}/${monthFromToday}/LAKI/BDC`,
			{ headers: { "x-auth-token": login.data } }
		);
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
		google.options({
			params: {
				quotaUser: "info.hotellaki@gmail.com"
			}
		});

		let calendar = google.calendar({ version: "v3", auth: jwtClient });
		const addEvent = async ({ occupancy, date }) => {
			const data = {
				summary: `${occupancy} Rooms Sold`,
				location: "Efri-Vik",
				description: `Currently we have ${occupancy} rooms sold`,
				start: {
					date: date
				},
				end: {
					date: date
				}
			};
			const res = await calendar.events.insert({
				calendarId: "info.hotellaki@gmail.com",
				resource: data
			});

			return res;
		};
		const updateEvent = async (
			{ currentRoomNumber, roomSold, currentDescription },
			id
		) => {
			const resource = {
				description: `${currentDescription} <br>Update: Number changed from <strong>${currentRoomNumber}</strong> to <strong>${roomSold}</strong> rooms sold at ${moment().format(
					"DD:MM:YYY hh:mm"
				)}`,
				summary: `${roomSold} Rooms Sold`
			};
			const res = await calendar.events.patch({
				calendarId: "info.hotellaki@gmail.com",
				eventId: id,
				resource
			});
			return res;
		};

		let eventList = await calendar.events.list({
			calendarId: "info.hotellaki@gmail.com",
			timeMin: moment().format(),

			maxResults: 900
		});
		const findExistingEvents = eventList.data.items.filter(
			e => e.creator && e.creator.email !== "info.hotellaki@gmail.com"
		);
		const toUpdate = findExistingEvents.reduce((acc, curr) => {
			const toUpdate = res.data.find(e => e.date === curr.start.date);
			if (toUpdate) {
				const currentRoomNumber = parseInt(curr.summary.match(/\d+/g)[0]);
				currentRoomNumber !== toUpdate.occupancy
					? updateEvent(
							{
								roomSold: toUpdate.occupancy,
								currentRoomNumber,
								currentDescription: curr.description
							},
							curr.id
					  )
					: false;
				acc.push(curr.start.date);
				return acc;
			}
			return acc;
		}, []);

		const test = res.data.reduce((acc, curr) => {
			const isExist = toUpdate.find(e => curr.date === e);
			if (!isExist) {
				addEvent({ occupancy: curr.occupancy, date: curr.date });
				console.log("event created");
			}
			/* 	const x = testing.find(e => e.date !== curr.date);
			if (!x) {
				return [...acc, curr];
			}
			return acc; */
		}, []);

		return test;

		/* 	res.data.forEach((e, i) => {
			setTimeout(async () => {
				addEvent(e);
			}, i * 500);
		}); */

		/* findEvents.forEach(async x => {
			try {
				await calendar.events.delete({
					calendarId: "info.hotellaki@gmail.com",
					eventId: x.id
				});
				console.log("deleted");
			} catch (error) {
				console.log(x.id);
				console.error(error.response.status);
			}
		}); */

		/* 		
		; */

		//Google Calendar API
	} catch (error) {
		console.log(error);
	}
};

module.exports = updateCalendar;
