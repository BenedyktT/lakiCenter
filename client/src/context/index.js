import moment from "moment";
import React from "react";

const Context = React.createContext();
export const reducer = (state, action) => {
	const { payload, type } = action;
	switch (type) {
		case "SET_CALENDAR":
			return { ...state, payload };

		default:
			return state;
	}
};
export class CalendarState extends React.Component {
	state = {
		startDate: moment(),
		endDate: moment().add(1, "day"),
		focused: false,
		dispatch: action => {
			this.setState(state => reducer(state, action));
		}
	};
	render() {
		const { children } = this.props;
		return <Context.Provider value={this.state}>{children}</Context.Provider>;
	}
}

export const CalendarConsumer = Context.Consumer;
