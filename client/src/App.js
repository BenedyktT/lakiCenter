import React from "react";
import logo from "./logo.svg";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./App.scss";

import Calendar from "./components/Calendar";

function App() {
	return (
		<div className="App container">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<Calendar />
		</div>
	);
}

export default App;
