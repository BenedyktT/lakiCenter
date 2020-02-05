import React, { useState } from "react";
import axios from "axios";
import PasswordWithGenerator from "react-password-with-generator";

const Register = () => {
	const [inputValue, setInputValue] = useState({
		name: "",
		password: "",
		repeatPassword: ""
	});

	const onSubmit = async e => {
		const { name, password } = inputValue;
		e.preventDefault();
		if (!name || !password) {
			console.log("dispatch error");
			return;
		}
		const data = inputValue;
		try {
			/* loginUser(data); */
		} catch (error) {
			console.error("INCORRECT CREDENTIAL");
		}
	};
	const onChange = e => {
		setInputValue({ ...inputValue, [e.target.name]: e.target.value });
	};

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
						value={inputValue.name}
					/>
				</div>

				<div className="input-container">
					<label htmlFor="password">Password:</label>
					<input
						onChange={onChange}
						className="padding-small  margin-small-x "
						name="password"
						type="text"
						autoComplete="password"
						value={inputValue.password}
					/>
				</div>
				<div className="input-container">
					<label htmlFor="password">Repeat password:</label>
					<input
						onChange={onChange}
						className="padding-small  margin-small-x "
						name="repeatPassword"
						type="text"
						autoComplete="password"
						value={inputValue.repeatPassword}
					/>
				</div>
				<div className="">
					<h1>Random password hint</h1>
					{/* 	<div className="">
						<PasswordWithGenerator />
					</div> */}
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

export default Register;
