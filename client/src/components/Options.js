import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadAvailability } from "../redux/actions/availability";

const Options = ({ loadAvailability, startDate, endDate }) => {
	const [inputValue, setInputValue] = useState({ rate: "HOT" });
	const onChange = e => {
		setInputValue({ rate: e.target.value });
	};
	useEffect(() => {
		loadAvailability(startDate, endDate, inputValue.rate);
	}, [inputValue.rate]);
	return (
		<div>
			<label htmlFor="rate">Select Rate</label>
			<select onChange={onChange} value={inputValue.rate}>
				<option name="rate" value="HOT">
					Hotel
				</option>
				<option name="rate" value="BDC">
					Booking.com
				</option>
				<option name="rate" value="TRAVEL">
					Travel Agency
				</option>
				<option name="rate" value="DISC">
					RTS WINTER
				</option>
			</select>
		</div>
	);
};

export default connect(
	state => ({
		startDate: state.availability.startDate,
		endDate: state.availability.endDate
	}),
	{ loadAvailability }
)(Options);
