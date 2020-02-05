import { DateRangePicker } from "react-dates";
import React, { useState } from "react";
import { setCalendar } from "../redux/actions/availability";
import moment from "moment";
import { connect } from "react-redux";

const Calendar = ({ startDate, endDate, setCalendar }) => {
	const [focusedInput, setFocusedInput] = useState(null);
	return (
		<DateRangePicker
			/* 	appendToBody={true} */
			numberOfMonths={1}
			startDate={startDate} // momentPropTypes.momentObj or null,
			startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
			endDate={endDate} // momentPropTypes.momentObj or null,
			endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
			onDatesChange={({ startDate, endDate }) =>
				setCalendar(startDate, endDate)
			} // PropTypes.func.isRequired,
			focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
			onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
			keepOpenOnDateSelect={false}
			minDate={moment().startOf("day")}
		/>
	);
};

export default connect(
	state => ({
		startDate: state.availability.startDate,
		endDate: state.availability.endDate
	}),
	{ setCalendar }
)(Calendar);
