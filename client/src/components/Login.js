import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { authContext } from "../context/authContext";
import axios from "axios";
import { header } from "express-validator";

const Login = ({ history }) => {
	const auth = useContext(authContext);
	const { dispatch, isAuthenticated, loading, token } = auth;
	const [inputValue, setInputValue] = useState({ name: null, password: null });

	const onSubmit = async e => {
		const { name, password } = inputValue;
		e.preventDefault();
		if (!name || !password) {
			console.log("dispatch error");
			return;
		}
		try {
			const data = inputValue;
			const res = await axios.post("/user/login", data, {
				headers: { "Content-Type": "application/json" }
			});
			dispatch({
				type: "LOGIN_USER",
				payload: res.data
			});
		} catch (error) {
			console.log("something went wrong");
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

export default Login;
