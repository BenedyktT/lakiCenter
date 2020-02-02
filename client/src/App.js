import React, { useContext, useEffect } from "react";
import logo from "./logo.svg";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./styles/App.scss";
import Dashboard from "./components/Dashboard";

import Privateroute from "./components/helper/PrivateRoute";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import { AuthState, authContext } from "./context/authContext";
import setAuthToken from "./components/helper/setAuthToken";
import axios from "axios";
if (localStorage.getItem("token")) {
	setAuthToken(localStorage.getItem("token"));
}
function App() {
	const { dispatch, isAuthenticated, token, loading, name } = useContext(
		authContext
	);
	useEffect(() => {
		if (token) {
			(async () => {
				try {
					const res = await axios.get("/user");
					dispatch({
						type: "LOAD_USER",
						payload: res.data
					});
				} catch (error) {}
			})();
		}
	}, []);
	return (
		<div className="App container">
			<Router>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					{!isAuthenticated ? (
						<Link to="/login" onClick={() => dispatch({ type: "LOGOUT_USER" })}>
							Login
						</Link>
					) : (
						<div className="">
							<Link
								to="/login"
								onClick={() => dispatch({ type: "LOGOUT_USER" })}
							>
								Log Out
							</Link>
							<p>{name ? name : null}</p>
						</div>
					)}
				</header>

				<Switch>
					<Privateroute exact path="/" component={Dashboard} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
