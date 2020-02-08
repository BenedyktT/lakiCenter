import React, { useState } from "react";

import PasswordWithGenerator from "react-password-with-generator";
import { registerUser } from "../redux/actions/auth";
import { connect } from "react-redux";
import { setAlert } from "../redux/actions/alerts";
const Register = ({ registerUser }) => {
	const [inputValue, setInputValue] = useState({
		name: "",
		password: "",
		rate: "TRAVEL"
	});

	const onSubmit = async e => {
		const { name, password } = inputValue;
		e.preventDefault();
		if (!name || !password) {
			setAlert("Invalid credentials", "danger");
			return;
		}
		const data = inputValue;
		try {
			registerUser(data);
		} catch (error) {
			setAlert("Register fail", "danger");
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
					<label htmlFor="name">Rate:</label>
					<select
						onChange={onChange}
						className="padding-small  margin-small-x "
						name="rate"
						value={inputValue.rate}
					>
						<option name="rate" value="BDC">
							Booking.com
						</option>
						<option name="rate" value="TRAVEL">
							Travel agency
						</option>
						<option name="rate" value="HOT">
							Discount direct
						</option>
					</select>
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
