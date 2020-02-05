import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Privateroute = ({
	component: Component,
	isAuthenticated,
	loading,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated && !loading ? (
					<Component {...props} />
				) : (
					<Redirect to="/login" />
				)
			}
		/>
	);
};

export default connect(state => ({
	isAuthenticated: state.auth.isAuthenticated,
	loading: state.auth.loading
}))(Privateroute);

{
	/* */
}
