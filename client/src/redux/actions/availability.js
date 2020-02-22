import {
	SET_CALENDAR,
	LOAD_AVAILABILITY,
	SET_RATE_TYPE,
	GET_MONTHLY_OVERVIEW
} from "./types";

import moment from "moment";
import axios from "axios";

export const loadAvailability = (
	startDate = moment(),
	endDate = moment().add(1, "day")
) => async dispatch => {
	try {
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

export const loadToggleableAvailability = (
	startDate = moment(),
	endDate = moment().add(1, "day"),
	rate = "TRAVEL"
) => async dispatch => {
	startDate = moment(startDate).format("YYYY-MM-DD");
	endDate = moment(endDate).format("YYYY-MM-DD");
	if (!rate) {
		rate = "TRAVEL";
	}
	try {
		const res = await axios.get(
			`/availability/admin/${startDate}/${endDate}/LAKI/${rate}`
		);
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

export const setRateType = rate => dispatch => {
	dispatch({
		type: SET_RATE_TYPE,
		payload: rate
	});
};

export const getMonthlyOverview = (
	startDate,
	endDate,
	hotel = "LAKI",
	agent = "BDC"
) => async dispatch => {
	try {
		const res = await axios.get(
			`/availability/monthly/${startDate}/${endDate}/${hotel}/${agent}`
		);

		dispatch({
			type: GET_MONTHLY_OVERVIEW,
			payload: res.data
		});
	} catch (error) {
		console.error(error);
	}
};
