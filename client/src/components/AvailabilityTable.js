import React from "react";
import { CalendarConsumer } from "../context";

const AvailabilityTable = () => {
	return (
		<CalendarConsumer>
			{value => {
				console.log(value);
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
								<tr>
									<td>Economy</td>
									<td>19000</td>
									<td>15000</td>
								</tr>
								<tr>
									<td>Standard</td>
									<td>13000</td>
									<td>12500</td>
								</tr>
							</tbody>
						</table>
					</div>
				);
			}}
		</CalendarConsumer>
	);
};

export default AvailabilityTable;
