import moment from "moment";
import React from "react";
import axios from "axios";
import setAuthToken from "../components/helper/setAuthToken";
export const Context = React.createContext();
export const reducer = (state, action) => {
	const { payload, type } = action;
	switch (type) {
		case "FOCUS_INPUT":
			return {
				...state,
				focusedInput: payload.focusedInput
			};
		case "SET_CALENDAR":
			const { startDate, endDate } = payload;
			if (startDate && endDate)
				return { ...state, isDateRangeSelected: true, startDate, endDate };
			return { ...state, startDate, endDate, isDateRangeSelected: false };

		default:
			return state;
	}
};
export class CalendarState extends React.Component {
	state = {
		startDate: moment(),
		endDate: moment().add(1, "day"),
		isDateRangeSelected: null,
		focusedInput: null,
		availability: null,
		dispatch: action => {
			this.setState(state => reducer(state, action));
		},
		fetch: async () => {
			try {
				if (localStorage.token) {
					setAuthToken(localStorage.token);
				}
				let { startDate, endDate } = this.state;
				startDate = moment(startDate).format("YYYY-MM-DD");
				endDate = moment(endDate).format("YYYY-MM-DD");
				const res = await axios.get(
					`/availability/${startDate}/${endDate}/LAKI`
				);
				this.setState(() => ({ availability: res.data }));
			} catch (error) {
				console.error(error);
			}
		}
	};

	async componentDidUpdate(prevProps, prevState) {
		const { startDate, endDate } = this.state;
		if (this.state.isDateRangeSelected && this.state.test === prevState.test) {
			if (startDate !== prevState.startDate || endDate !== prevState.endDate) {
				this.state.fetch();
			}
		}
	}

	render() {
		const { children } = this.props;
		return <Context.Provider value={this.state}>{children}</Context.Provider>;
	}
}

export const CalendarConsumer = Context.Consumer;
