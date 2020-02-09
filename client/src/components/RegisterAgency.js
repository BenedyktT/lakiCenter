import React, { useState } from "react";

import { registerUser } from "../redux/actions/auth";
import { connect } from "react-redux";
import { setAlert } from "../redux/actions/alerts";
const Register = ({ registerUser, setAlert, isRegistered, history }) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    password: "",
    rate: "TRAVEL",
    repeatPassword: "",
    email: ""
  });

  const onSubmit = async e => {
    let { name, password, repeatPassword, rate, email } = inputValue;
    e.preventDefault();
    if (!name || !password) {
      setAlert("Invalid credentials", "danger");
      return;
    }
    if (name.length < 3) {
      setAlert("User name must have more than 3 letters", "danger");
      return;
    }
    if (password !== repeatPassword) {
      setAlert("Password has to match", "danger");
      return;
    }
    if (password.length < 2) {
      setAlert("Password to short", "danger");
      return;
    }
    if (!email) {
      setAlert("email is required", "danger");
      return;
    }
    name = name
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    const data = { name, password, rate, email };
    try {
      registerUser(data);
    } catch (error) {
      setAlert("Register fail", "danger");
    }
  };
  const onChange = e => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  if (isRegistered) {
    history.push("/login");
  }

  return (
    <div className="container border nooverflow">
      <form onSubmit={onSubmit} className="form">
        <div className="input-container">
          <label htmlFor="name">Agency:</label>
          <input
            onChange={onChange}
            className="padding-small  margin-small-x "
            name="name"
            type="text"
            autoComplete="username"
            value={inputValue.name}
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">New Password:</label>
          <input
            onChange={onChange}
            className="padding-small  margin-small-x "
            name="password"
            type="password"
            autoComplete="new-password"
            value={inputValue.password}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Repeat Password:</label>
          <input
            onChange={onChange}
            className="padding-small  margin-small-x "
            name="repeatPassword"
            type="password"
            autoComplete="new-password"
            value={inputValue.repeatPassword}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Email:</label>
          <input
            onChange={onChange}
            className="padding-small  margin-small-x "
            name="email"
            type="email"
            autoComplete="email"
            value={inputValue.email}
          />
        </div>

        <input
          className="padding-small margin-y"
          type="submit"
          value="Register New user
				"
        />
      </form>
    </div>
  );
};

export default connect(
  state => ({
    isRegistered: state.auth.isRegistered
  }),
  { registerUser, setAlert }
)(Register);
