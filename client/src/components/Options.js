import React from "react";

const Options = () => {
	return (
		<div>
			<label htmlFor="rate">Select Rate</label>
			<select name="rate" id="">
				<option value="hot">Hotel</option>
				<option value="bdc">Booking.com</option>
				<option value="travel">Travel Agency</option>
			</select>
		</div>
	);
};

export default Options;
