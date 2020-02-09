import React, { useEffect } from "react";
import { loadToggleableAvailability } from "../redux/actions/availability";
import { connect } from "react-redux";

const AvailabilityTable = ({
	availability,
	rate,
	isDateRangeSelected,
	startDate,
	endDate,
	loadToggleableAvailability
}) => {
	useEffect(() => {
		loadToggleableAvailability();
	}, []);
	useEffect(() => {
		if (isDateRangeSelected) {
			loadToggleableAvailability(startDate, endDate, rate);
		}
	}, [isDateRangeSelected, startDate, endDate]);
	return (
		<div className="table-wrapper container">
			<table className="blueTable">
				<thead>
					<tr>
						<th></th>
						<th>Availability</th>
						<th>Rate</th>
					</tr>
				</thead>

				<tbody>
					{availability &&
						availability
							.filter(
								e => /* !e.desc.includes("1P") &&  */ !e.desc.includes("-5%")
							)
							.sort((a, b) => (a.desc > b.desc ? 1 : -1))
							.map(roomType => (
								<tr key={roomType.desc}>
									<td>{roomType.desc}</td>
									<td>{roomType.dayAvail.available}</td>
									<td>
										{roomType.dayAvail.rate} {roomType.currency}
									</td>
								</tr>
							))}
				</tbody>
			</table>
		</div>
	);
};

export default connect(
	state => ({
		availability: state.availability.availability,
		rate: state.availability.rateType,
		startDate: state.availability.startDate,
		endDate: state.availability.endDate,
		isDateRangeSelected: state.availability.isDateRangeSelected
	}),
	{ loadToggleableAvailability }
)(AvailabilityTable);
