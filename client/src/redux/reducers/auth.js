import { LOGIN_USER, LOAD_USER, LOGOUT_USER } from "../actions/types";

const initialState = {
	loading: true,
	isAuthenticated: false,
	token: localStorage.getItem("token") || null,
	name: null
};
export default (state = initialState, { type, payload }) => {
	switch (type) {
		case LOGIN_USER:
			localStorage.setItem("token", payload.token);
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				token: payload.token
			};
		case LOGOUT_USER:
			localStorage.removeItem("token");
			return {
				...state,
				isAuthenticated: false,
				loading: false,
				token: null,
				name: null
			};

		case LOAD_USER:
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
