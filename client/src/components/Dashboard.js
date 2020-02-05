import React from "react";
import AvailabilityTable from "./AvailabilityTable";
import Calendar from "./Calendar";
import { Link } from "react-router-dom";

import Options from "./Options";

const Dashboard = () => {
	return (
		<div>
			{/* <div className="container">
					<Options />
				</div> */}

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

export default Dashboard;
