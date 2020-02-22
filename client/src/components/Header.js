import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { logoutUser, loadUser } from "../redux/actions/auth";
import { toggleHamburger } from "../redux/actions/layout";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Plus } from "../assets/plus.svg";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Logout } from "../assets/logout.svg";
import { ReactComponent as Occupancy } from "../assets/occupancy.svg";
import classnames from "classnames";

const Header = ({
	isAuthenticated,
	logoutUser,
	name,
	isHamburgerActive,
	toggleHamburger
}) => {
	const getWindowWidth = () => {
		const { innerWidth: width } = window;
		return {
			width
		};
	};
	function useWindowDimensions() {
		const [windowDimensions, setWindowDimensions] = useState(getWindowWidth());

		useEffect(() => {
			function handleResize() {
				setWindowDimensions(getWindowWidth());
			}

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}, []);

		return windowDimensions;
	}
	const { width } = useWindowDimensions();
	return (
		<Fragment>
			{isHamburgerActive && (
				<div
					onClick={() => {
						return toggleHamburger();
					}}
					className="overlay"
				></div>
			)}
			<header className="App-header">
				<Link to="/" onClick={() => localStorage.removeItem("route")}>
					<img src={logo} className="App-logo" alt="logo" />
				</Link>{" "}
				{}
				<nav
					className={classnames("nav", {
						"nav-toggle": width < 800,
						active: isHamburgerActive
					})}
				>
					{name === "adminlaki" && (
						<Fragment>
							<Link
								className="btn btn-nav nav-link"
								to="/"
								onClick={() => localStorage.removeItem("route")}
							>
								<i>
									<Home className="nav-icon" />
								</i>
								Home
							</Link>
							<Link
								className="btn btn-nav nav-link"
								to="/register"
								onClick={() => localStorage.removeItem("route")}
							>
								<i>
									<Plus className="nav-icon" />
								</i>
								Register
							</Link>
							<Link
								className="btn btn-nav nav-link"
								to="/admin/overview"
								onClick={() => localStorage.setItem("route", "/admin/overview")}
							>
								<i>
									<Occupancy className="nav-icon" />
								</i>
								Occupancy
							</Link>
						</Fragment>
					)}
					{isAuthenticated && (
						<div className="nav-link">
							<Link
								className="btn btn-nav"
								to="/login"
								onClick={() => {
									logoutUser();
									localStorage.removeItem("route");
								}}
							>
								<i>
									<Logout className="nav-icon" />
								</i>
								Log Out
							</Link>
							<div>{name && name}</div>
						</div>
					)}
				</nav>
				{isAuthenticated && width < 800 && (
					<div onClick={() => toggleHamburger()} className="hamburger">
						<span className="hamburger__line"></span>
						<span className="hamburger__line"></span>
						<span className="hamburger__line"></span>
					</div>
				)}
			</header>
		</Fragment>
	);
};

export default connect(
	state => ({
		isAuthenticated: state.auth.isAuthenticated,
		name: state.auth.name,
		isHamburgerActive: state.layout.isHamburgerActive
	}),
	{ logoutUser, loadUser, toggleHamburger }
)(Header);
