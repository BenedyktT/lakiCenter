import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import moment from "moment";

import { getMonthlyOverview } from "../redux/actions/availability";

const AdminOccupancyOverview = ({ getMonthlyOverview, monthReport }) => {
	const [date, setDate] = useState({
		startDate: moment(),
		endDate: moment().add(1, "month")
	});
	const [focusedInput, setFocusedInput] = useState(null);
	const [hotel, setHotel] = useState("LAKI");
	const [agent, setAgent] = useState("BDC");
	useEffect(() => {
		if (!focusedInput) {
			const startDate = moment(date.startDate).format("YYYY-MM-DD");
			const endDate = moment(date.endDate).format("YYYY-MM-DD");
			getMonthlyOverview(startDate, endDate, hotel, agent);
		}
	}, [focusedInput, hotel, agent]);
	return (
		<div className="">
			<div className="">
				<DateRangePicker
					numberOfMonths={1}
					startDate={date.startDate} // momentPropTypes.momentObj or null,
					startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
					endDate={date.endDate} // momentPropTypes.momentObj or null,
					endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
					onDatesChange={({ startDate, endDate }) =>
						setDate({ startDate, endDate })
					} // PropTypes.func.isRequired,
					focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
					onFocusChange={focusedInput => {
						setFocusedInput(focusedInput);
					}} // PropTypes.func.isRequired,
				/>
				<div className="">
					<select
						name="hotel"
						defaultValue="LAKI"
						onChange={e => setHotel(e.target.value)}
					>
						<option value="LAKI">Hotel Laki</option>
						<option value="KLAUS">Klaustur</option>
					</select>
					<select
						name="agent"
						defaultValue="BDC"
						onChange={e => setAgent(e.target.value)}
					>
						<option value="BDC">Booking</option>
						<option value="EXP">Expedia</option>
						<option value="Travel">Travel</option>
					</select>
				</div>
				<div className="table-wrapper container">
					<table className="blueTable">
						<thead>
							<tr>
								<th>Date</th>
								<th>Occupancy</th>
								<th>BAR</th>
							</tr>
						</thead>

						{
							<tbody>
								{monthReport &&
									monthReport.map(day => (
										<tr key={day.date}>
											<td>{day.date}</td>
											<td>{day.occupancy}</td>
											<td>{day.rate}</td>
										</tr>
									))}
							</tbody>
						}
					</table>
				</div>
			</div>
		</div>
	);
};

export default connect(state => ({ monthReport: state.adminOverview }), {
	getMonthlyOverview
})(AdminOccupancyOverview);

/*  */
