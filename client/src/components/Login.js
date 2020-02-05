import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/auth";

const Login = ({ history, loginUser, isAuthenticated, loading }) => {
	const [inputValue, setInputValue] = useState({ name: null, password: null });

	const onSubmit = async e => {
		const { name, password } = inputValue;
		e.preventDefault();
		if (!name || !password) {
			console.log("dispatch error");
			return;
		}
		const data = inputValue;
		try {
			loginUser(data);
		} catch (error) {
			console.error("INCORRECT CREDENTIAL");
		}
	};
	const onChange = e => {
		setInputValue({ ...inputValue, [e.target.name]: e.target.value });
	};
	useEffect(() => {
		if (isAuthenticated && !loading) {
			history.push("/");
		}
	}, [isAuthenticated]);

	return (
		<div className="container border nooverflow">
			<form onSubmit={onSubmit} className="form">
				<div className="input-container">
					<label htmlFor="name">User:</label>
					<input
						onChange={onChange}
						className="padding-small  margin-small-x "
						name="name"
						type="text"
						autoComplete="username"
					/>
				</div>

				<div className="input-container">
					<label htmlFor="password">Password:</label>
					<input
						onChange={onChange}
						className="padding-small  margin-small-x "
						name="password"
						type="password"
						autoComplete="password"
					/>
				</div>

				<input className="padding-small margin-y" type="submit" value="Login" />
			</form>
		</div>
	);
};

export default connect(
	state => ({
		isAuthenticated: state.auth.isAuthenticated,
		loading: state.auth.loading
	}),
	{ loginUser }
)(Login);
