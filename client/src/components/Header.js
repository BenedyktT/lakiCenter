import React from "react";
import { connect } from "react-redux";
import { logoutUser, loadUser } from "../redux/actions/auth";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, logoutUser, name, loadUser }) => {
	if (!name && isAuthenticated) {
		loadUser();
	}

	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			{isAuthenticated && (
				<div className="">
					<Link to="/login" onClick={() => logoutUser()}>
						Log Out
					</Link>
					<div>{name && name}</div>
				</div>
			)}
		</header>
	);
};

export default connect(
	state => ({
		isAuthenticated: state.auth.isAuthenticated,
		name: state.auth.name
	}),
	{ logoutUser, loadUser }
)(Header);
