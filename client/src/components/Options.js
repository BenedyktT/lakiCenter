import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
	setRateType,
	loadToggleableAvailability
} from "../redux/actions/availability";

const Options = ({
	startDate,
	endDate,
	setRateType,
	rate,
	loadToggleableAvailability
}) => {
	const onChange = e => {
		setRateType(e.target.value);
	};
	useEffect(() => {
		if (rate) {
			loadToggleableAvailability(startDate, endDate, rate);
		}
	}, [rate]);
	return (
		<div>
			<label htmlFor="rate">Select Rate</label>
			<select onChange={onChange} value={rate}>
				<option name="rate" value="TRAVEL">
					Travel Agency
				</option>
				<option name="rate" value="HOT">
					Hotel
				</option>
				<option name="rate" value="BDC">
					Booking.com
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
		endDate: state.availability.endDate,
		rate: state.availability.rateType
	}),
	{ loadToggleableAvailability, setRateType }
)(Options);
