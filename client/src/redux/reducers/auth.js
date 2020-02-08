import {
	LOGIN_USER,
	LOAD_USER,
	LOGOUT_USER,
	REGISTER_USER
} from "../actions/types";

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
		case REGISTER_USER:
			console.log(payload);
			return {
				...state,
				loading: false
			};

		default:
			return state;
	}
};
