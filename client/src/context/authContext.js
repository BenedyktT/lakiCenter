import React from "react";

export const authContext = React.createContext();

export const reducer = (state, action) => {
	const { payload, type } = action;
	switch (type) {
		case "LOGIN_USER":
			localStorage.setItem("token", payload.token);
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				token: payload.token
			};
		case "LOGOUT_USER":
			localStorage.removeItem("token");
			return {
				...state,
				isAuthenticated: false,
				loading: false,
				token: null,
				name: null
			};
		case "LOAD_USER":
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				name: payload.name
			};

		default:
			return state;
	}
};

export class AuthState extends React.Component {
	state = {
		loading: true,
		isAuthenticated: false,
		token: localStorage.getItem("token") || null,
		name: null,
		dispatch: action => {
			this.setState(state => reducer(state, action));
		}
	};

	render() {
		const { children } = this.props;
		return (
			<authContext.Provider value={this.state}>{children}</authContext.Provider>
		);
	}
}

export const AuthConsumer = authContext.Consumer;
