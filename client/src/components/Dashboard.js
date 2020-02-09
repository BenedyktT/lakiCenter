import React, { useEffect } from "react";
import AvailabilityTable from "./AvailabilityTable";
import Calendar from "./Calendar";
import { connect } from "react-redux";
import { loadAvailability } from "../redux/actions/availability";

const Dashboard = ({ history, user }) => {
	useEffect(() => {
		if (user === "adminlaki") {
			history.push("/admin");
			return;
		}
	}, [user]);
	return (
		<div>
			<Calendar />
			<AvailabilityTable />
			<div className="">
				<p>
					Pick reservation date and see how many rooms we have available, and
					what best rate we can offer. <br />
					Rates visible in table above are for 1 room
				</p>
			</div>
		</div>
	);
};

export default connect(
	state => ({
		user: state.auth.name,
		availability: state.availability.availability
	}),
	{ loadAvailability }
)(Dashboard);
