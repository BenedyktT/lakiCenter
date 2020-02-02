import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { authContext } from "../../context/authContext";

const Privateroute = ({
	component: Component,

	...rest
}) => {
	const auth = useContext(authContext);
	const { isAuthenticated, loading } = auth;
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
