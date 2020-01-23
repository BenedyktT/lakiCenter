import React, { useState } from "react";
import logo from "./logo.svg";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./App.scss";

import Calendar from "./components/Calendar";
import AvailabilityTable from "./components/AvailabilityTable";
import { CalendarState } from "./context";

function App() {
	return (
		<div className="App container">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<CalendarState>
				<Calendar />
				<AvailabilityTable />
			</CalendarState>
		</div>
	);
}

export default App;
