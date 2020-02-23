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
			.add(5, "day")
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
		const addEvent = async event => {
			const data = {
				summary: `${event.occupancy} Rooms Sold`,
				location: "Efri-Vik",
				description: "Hi there!",
				start: {
					date: event.date
				},
				end: {
					date: event.date
				}
			};
			const res = await calendar.events.insert({
				calendarId: "info.hotellaki@gmail.com",
				resource: data
			});

			return res;
		};
		const updateEvent = async (event, id) => {
			const resource = {
				description: event
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
		const test = findExistingEvents.reduce((acc, curr) => {
			const toUpdate = res.data.find(e => e.date === curr.start.date);
			if (toUpdate) {
				const currentRoomNumber = parseInt(curr.summary.match(/\d+/g)[0]);
				toUpdate.occupancy === currentRoomNumber
					? console.log("tak")
					: console.log("nie");
				curr.description === "Hi there!"
					? updateEvent("HELLLLOOOOOOO MOTHERFUCKA", curr.id)
					: false;
				acc.push(currentRoomNumber);
			}
			return acc;
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
