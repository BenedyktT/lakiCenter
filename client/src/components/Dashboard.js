import React from "react";
import AvailabilityTable from "./AvailabilityTable";
import Calendar from "./Calendar";
import { CalendarState } from "../context/index";
import Options from "./Options";

const Dashboard = () => {
	return (
		<div>
			<CalendarState>
				{/* 		<div className="container">
					<Options />
				</div> */}

				<Calendar />
				<AvailabilityTable />
			</CalendarState>
		</div>
	);
};

export default Dashboard;
