import { LOGOUT_USER, LOGIN_USER, LOAD_USER, REGISTER_USER } from "./types";
import axios from "axios";
import { setAlert } from "./alerts";
export const logoutUser = () => dispatch => {
	dispatch({ type: LOGOUT_USER });
};

export const loginUser = data => async dispatch => {
	try {
		const res = await axios.post("/user/login", data, {
			headers: { "Content-Type": "application/json" }
		});

		dispatch({
			type: LOGIN_USER,
			payload: res.data
		});
		dispatch(loadUser());
		dispatch(setAlert("Welcome", "success"));
	} catch (error) {
		dispatch(setAlert("Invalid Credentials", "danger"));
	}
};

export const registerUser = data => async dispatch => {
	try {
		const res = await axios.post("/user/register", data, {
			headers: { "Content-Type": "application/json" }
		});

		dispatch({
			type: REGISTER_USER,
			payload: res.data
		});
	} catch (error) {
		dispatch(setAlert("Register fail", "danger"));
	}
};

export const loadUser = () => async dispatch => {
	try {
		const res = await axios.get("/user");
		dispatch({
			type: LOAD_USER,
			payload: res.data
		});
	} catch (error) {
		setAlert("error.message", "danger");
	}
};
