import React, { useEffect } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./styles/App.scss";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Privateroute from "./components/helper/PrivateRoute";
import AdminRoute from "./components/helper/AdminRoute";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import setAuthToken from "./components/helper/setAuthToken";
import Register from "./components/Register";
import { loadUser } from "./redux/actions/auth";
import Alert from "./components/Alert";
import AdminDashboard from "./components/AdminDashboard";
import RegisterAgency from "./components/RegisterAgency";
import ForgotPassword from "./components/ForgotPassword";
import SetNewPassword from "./components/SetNewPassword";
import AdminOccupancyOverview from "./components/AdminOccupancyOverview";

const token = localStorage.getItem("token");
if (token) {
	setAuthToken(token);
}
function App() {
	useEffect(() => {
		if (token) {
			store.dispatch(loadUser());
		}
	}, [token]);

	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Header />

					<Alert />
					<div className="container">
						<Switch>
							<AdminRoute
								exact
								path="/admin/overview"
								component={AdminOccupancyOverview}
							/>
							<AdminRoute exact path="/register" component={Register} />
							<AdminRoute exact path="/admin" component={AdminDashboard} />
							<Privateroute exact path="/" component={Dashboard} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/register/agency" component={RegisterAgency} />
							<Route exact path="/forgotpassword" component={ForgotPassword} />
							<Route
								exact
								path="/password/reset/:id/:token"
								component={SetNewPassword}
							/>
						</Switch>
					</div>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
