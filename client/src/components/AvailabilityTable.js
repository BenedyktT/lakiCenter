import React, { useContext, useEffect } from "react";
import { CalendarConsumer } from "../context";
import { Context } from "../context/index";

const AvailabilityTable = () => {
	const context = useContext(Context);
	const { fetch } = context;
	useEffect(() => {
		fetch();
	}, []);
	return (
		<CalendarConsumer>
			{({ availability }) => {
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
									<td>
										{availability ? availability[1].dayAvail.available : "?"}
									</td>
									<td>{availability ? availability[1].dayAvail.rate : "?"}</td>
								</tr>
								<tr>
									<td>Standard</td>
									<td>
										{availability ? availability[2].dayAvail.available : "?"}
									</td>
									<td>{availability ? availability[2].dayAvail.rate : "?"}</td>
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
