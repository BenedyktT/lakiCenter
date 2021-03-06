import {
	LOGIN_USER,
	LOAD_USER,
	LOGOUT_USER,
	REGISTER_USER,
	REGISTER_SUCCESS,
	REGISTER_RESET,
	EMAIL_SENT,
	PASSWORD_CHANGE_SUCCESS
} from "../actions/types";

const initialState = {
	loading: true,
	isAuthenticated: false,
	token: localStorage.getItem("token") || null,
	name: null,
	isRegistered: null,
	emailSent: false,
	passwordChanged: false
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
			return {
				...state,
				loading: false
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				isRegistered: true,
				loading: false
			};
		case REGISTER_RESET:
			return {
				...state,
				isRegistered: false
			};
		case EMAIL_SENT:
			return {
				...state,
				emailSent: true
			};
		case PASSWORD_CHANGE_SUCCESS:
			return { ...state, passwordChanged: true };

		default:
			return state;
	}
};
