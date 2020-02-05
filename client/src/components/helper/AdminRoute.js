import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Privateroute = ({
	component: Component,
	isAuthenticated,
	loading,
	name,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated && !loading && name === "adminlaki" ? (
					<Component {...props} />
				) : (
					<Redirect to="/" />
				)
			}
		/>
	);
};

export default connect(state => ({
	isAuthenticated: state.auth.isAuthenticated,
	loading: state.auth.loading,
	name: state.auth.name
}))(Privateroute);

{
	/* */
}
