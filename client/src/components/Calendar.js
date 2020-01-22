import moment from "moment";

import { DateRangePicker } from "react-dates";

import React, { Component } from "react";

export default class Calendar extends Component {
	state = {
		startDate: moment(),
		endDate: moment().add(1, "day"),
		focused: false
	};
	render() {
		return (
			<div>
				<DateRangePicker
					startDate={this.state.startDate} // momentPropTypes.momentObj or null,
					startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
					endDate={this.state.endDate} // momentPropTypes.momentObj or null,
					endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
					onDatesChange={({ startDate, endDate }) =>
						this.setState({ startDate, endDate })
					} // PropTypes.func.isRequired,
					focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
					onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
					keepOpenOnDateSelect={true}
					minDate={moment().startOf("day")}
					isDayHighlighted={day => (moment(day) == moment() ? true : false)}
				/>
			</div>
		);
	}
}
