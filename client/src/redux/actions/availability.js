import { SET_CALENDAR, LOAD_AVAILABILITY } from "./types";
import setAuthToken from "../../components/helper/setAuthToken";
import moment from "moment";
import axios from "axios";

export const loadAvailability = (
	startDate = moment(),
	endDate = moment().add(1, "day")
) => async dispatch => {
	try {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}

		startDate = moment(startDate).format("YYYY-MM-DD");
		endDate = moment(endDate).format("YYYY-MM-DD");
		const res = await axios.get(`/availability/${startDate}/${endDate}/LAKI`);
		dispatch({
			type: LOAD_AVAILABILITY,
			payload: res.data
		});
	} catch (error) {
		console.error(error);
	}
};

export const setCalendar = (startDate, endDate) => dispatch => {
	dispatch({
		type: SET_CALENDAR,
		payload: { startDate, endDate }
	});
};
