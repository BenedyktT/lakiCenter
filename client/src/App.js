import React, { useEffect } from "react";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./styles/App.scss";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Privateroute from "./components/helper/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import setAuthToken from "./components/helper/setAuthToken";
import axios from "axios";
import { LOAD_USER } from "./redux/actions/types";
import { loadUser } from "./redux/actions/auth";

const token = localStorage.getItem("token");
if (token) {
	setAuthToken(token);
}
function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Header />

					<Switch>
						<Privateroute exact path="/" component={Dashboard} />
						<Route exact path="/login" component={Login} />
					</Switch>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
