import React from "react";
import { connect } from "react-redux";

const Alert = ({ alert }) => {
	return (
		alert &&
		alert.map(({ msg, type, id }) => (
			<div
				key={id}
				className={type === "danger" ? "alert-box danger" : "alert-box success"}
			>
				{msg}
			</div>
		))
	);
};

export default connect(state => ({ alert: state.alert }))(Alert);
