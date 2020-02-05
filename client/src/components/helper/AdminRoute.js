import React from "react";
import { Route, Redirect } from "react-router-dom";

const Privateroute = ({
	component: Component,

	...rest
}) => {
	const { isAuthenticated, loading, name } = auth;
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

export default Privateroute;

{
	/* */
}
