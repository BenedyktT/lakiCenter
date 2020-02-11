import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { sendEmailWithResetLink } from "../redux/actions/auth";
import { setAlert } from "../redux/actions/alerts";
import { Link } from "react-router-dom";

const ForgotPassword = ({ setAlert, sendEmailWithResetLink, emailSent }) => {
	const [inputValue, setInputValue] = useState({
		email: ""
	});

	const onSubmit = async e => {
		e.preventDefault();

		try {
			sendEmailWithResetLink(inputValue);
		} catch (error) {
			setAlert("Invalid Credentials", "danger");
		}
	};
	const onChange = e => {
		setInputValue({ ...inputValue, [e.target.name]: e.target.value });
	};
	/* useEffect(() => {
		if (isAuthenticated && !loading) {
			history.push("/");
		}
	}, [isAuthenticated]); */

	return (
		<div className="container border nooverflow">
			<form onSubmit={onSubmit} className="form">
				<div className="input-container">
					<label htmlFor="email">Email:</label>
					<input
						onChange={onChange}
						className="padding-small  margin-small-x "
						name="email"
						type="email"
						autoComplete="email"
					/>
				</div>
				<div className="">
					{emailSent && (
						<div className="">
							<p>We have sent an email with link to reset your password</p>
							<br />
							<p>Didn't get any email? Click again to resend it</p>
						</div>
					)}
				</div>
				<input
					className="padding-small margin-y"
					type="submit"
					value={!emailSent ? "Send an email" : "Send new Email"}
				/>
			</form>
			<Link className="btn" style={{ color: "blue" }} to="/login">
				Go back to login page
			</Link>
		</div>
	);
};

export default connect(state => ({ emailSent: state.auth.emailSent }), {
	setAlert,
	sendEmailWithResetLink
})(ForgotPassword);
