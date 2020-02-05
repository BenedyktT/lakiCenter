import { LOGOUT_USER, LOGIN_USER, LOAD_USER } from "./types";
import axios from "axios";
export const logoutUser = () => dispatch => {
	dispatch({ type: LOGOUT_USER });
};

export const loginUser = data => async dispatch => {
	const res = await axios.post("/user/login", data, {
		headers: { "Content-Type": "application/json" }
	});

	dispatch({
		type: LOGIN_USER,
		payload: res.data
	});
	dispatch(loadUser());
};

export const loadUser = () => async dispatch => {
	try {
		const res = await axios.get("/user");
		dispatch({
			type: LOAD_USER,
			payload: res.data
		});
	} catch (error) {
		console.error(error);
	}
};
