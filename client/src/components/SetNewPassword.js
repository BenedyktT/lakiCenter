import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { resetPassword } from "../redux/actions/auth";
import { setAlert } from "../redux/actions/alerts";
import { Link } from "react-router-dom";

const ForgotPassword = ({
	setAlert,
	resetPassword,
	match,
	history,
	isPasswordChanged
}) => {
	const [inputValue, setInputValue] = useState({
		password: "",
		repeatPassword: ""
	});
	const { id, token } = match.params;
	const onSubmit = async e => {
		const { repeatPassword, password } = inputValue;
		e.preventDefault();
		if (!password || !repeatPassword) {
			setAlert("Fill all fields", "danger");
			return;
		}
		if (password !== repeatPassword) {
			setAlert("Password has to match", "danger");
			return;
		}
		if (password.length <= 3) {
			setAlert("New password has to have more than 3 characters", "danger");
			return;
		}

		try {
			resetPassword({ password }, id, token);
		} catch (error) {
			setAlert("Invalid Credentials", "danger");
		}
	};
	const onChange = e => {
		setInputValue({ ...inputValue, [e.target.name]: e.target.value });
	};
	useEffect(() => {
		if (isPasswordChanged) {
			history.push("/");
		}
	}, [isPasswordChanged]);

	return (
		<div className="container border nooverflow">
			<form onSubmit={onSubmit} className="form">
				<div className="input-container">
					<label htmlFor="password">New Password:</label>
					<input
						onChange={onChange}
						className="padding-small  margin-small-x "
						name="password"
						type="password"
						autoComplete="newPassword"
					/>
				</div>
				<div className="input-container">
					<label htmlFor="password">Repeat Password:</label>
					<input
						onChange={onChange}
						className="padding-small  margin-small-x "
						name="repeatPassword"
						type="password"
						autoComplete="repeatPassword"
					/>
				</div>

				<input
					className="padding-small margin-y"
					type="submit"
					value="Reset password"
				/>
			</form>
		</div>
	);
};

export default connect(
	state => ({ isPasswordChanged: state.auth.passwordChanged }),
	{ setAlert, resetPassword }
)(ForgotPassword);
