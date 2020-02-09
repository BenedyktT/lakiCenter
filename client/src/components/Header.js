import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logoutUser, loadUser } from "../redux/actions/auth";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { loadAvailability } from "../redux/actions/availability";

const Header = ({ isAuthenticated, logoutUser, name }) => {
  return (
    <header className="App-header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      {name === "adminlaki" && (
        <Link className="btn btn-nav" to="/register">
          Register
        </Link>
      )}
      {isAuthenticated && (
        <div className="">
          <Link
            className="btn btn-nav"
            to="/login"
            onClick={() => logoutUser()}
          >
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
  { logoutUser, loadUser, loadAvailability }
)(Header);
