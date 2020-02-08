import React, { useState } from "react";

import PasswordWithGenerator from "react-password-with-generator";
import { registerUser } from "../redux/actions/auth";
import { connect } from "react-redux";
const Register = ({ registerUser }) => {
	const [inputValue, setInputValue] = useState({
		name: "",
		password: ""
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
			registerUser(data);
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
				<div className="">
					<h1>Random password hint</h1>
					<br />
					<small>
						Copy it to clipboard, and send to the customer with username
					</small>
					<br />
					<div className="">
						<PasswordWithGenerator
							passwordNotMemorable={true}
							onBlur={e => {
								setInputValue({ ...inputValue, password: e.target.value });
							}}
							readOnly={true}
						/>
					</div>
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

export default connect(null, { registerUser })(Register);
