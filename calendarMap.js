const axios = require("axios");
const moment = require("moment");
const { google } = require("googleapis");
const privatekey = require("./lakiconnect.js");
const sendEmail = require("./sendMail");

const updateCalendar = async () => {
	let changes = [];
	try {
		//login
		const data = { name: "adminlaki", password: process.env.adminPass };
		const login = await axios.post(
			"http://www.lakicenter.com/user/login",
			data,
			{
				headers: { "Content-Type": "application/json" }
			}
		);
		const today = moment().format("YYYY-MM-DD");
		const monthFromToday = moment()
			.add(8, "month")
			.format("YYYY-MM-DD");
		const res = await axios.get(
			`http://www.lakicenter.com/availability/monthly/${today}/${monthFromToday}/LAKI/BDC`,
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
			{ currentRoomNumber, roomSold, currentDescription, date },
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
			console.log("updated");
			changes = [...changes, { date, from: currentRoomNumber, to: roomSold }];
			return res;
		};

		let eventList = await calendar.events.list({
			calendarId: "info.hotellaki@gmail.com",
			singleEvents: true,
			timeMin: moment().format(),
			orderBy: "startTime",
			maxResults: 99999
		});
		const findExistingEvents = eventList.data.items.filter(
			e =>
				e.status !== "cancelled" &&
				e.creator.email ===
					"calendarconnect@lakiconnect.iam.gserviceaccount.com"
		);
		res.data.reduce((acc, curr, i) => {
			const isExist = findExistingEvents.find(e => curr.date === e.start.date);

			if (!isExist) {
				setTimeout(() => {
					addEvent({ occupancy: curr.occupancy, date: curr.date });
					console.log("event created");
				}, i * 1000);
				return [...acc, curr];
			}

			return acc;
		}, []);

		const accUpdates = findExistingEvents.reduce((acc, curr) => {
			const toUpdate = res.data.find(e => e.date === curr.start.date);
			if (toUpdate) {
				const currentRoomNumber = parseInt(curr.summary.match(/\d+/g)[0]);
				if (currentRoomNumber !== toUpdate.occupancy) {
					updateEvent(
						{
							roomSold: toUpdate.occupancy,
							currentRoomNumber,
							currentDescription: curr.description,
							date: curr.start.date
						},
						curr.id
					);
					return [
						...acc,
						{
							date: curr.start.date,
							from: currentRoomNumber,
							to: toUpdate.occupancy
						}
					];
				}

				return acc;
			}

			return acc;
		}, []);
		sendEmail(accUpdates);
		return accUpdates;
	} catch (error) {
		console.log(error);
		sendEmail(
			null,
			"error while updating calendar, Do not worry! I will try another time, if this error will be annoying and showing too often - time to contact Benedykt"
		);
	}
};

module.exports = updateCalendar;

/* return changes; */

//delete all events
/* 	findExistingEvents.forEach((x, i) => {
			console.log("this.fire");
			try {
				setTimeout(() => {
					calendar.events.delete({
						calendarId: "info.hotellaki@gmail.com",
						eventId: x.id
					});
					console.log("deleted");
				}, i * 500);
			} catch (error) {
				console.log(error);
			}
		}); */

//Google Calendar API
