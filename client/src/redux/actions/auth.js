import {
	LOGOUT_USER,
	LOGIN_USER,
	LOAD_USER,
	REGISTER_USER,
	REGISTER_SUCCESS,
	REGISTER_RESET,
	EMAIL_SENT,
	PASSWORD_CHANGE_SUCCESS
} from "./types";
import axios from "axios";
import { setAlert } from "./alerts";
import setAuthToken from "../../components/helper/setAuthToken";
export const logoutUser = () => dispatch => {
	dispatch({ type: LOGOUT_USER });
	dispatch(setAlert("User logged out", "success"));
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
			type: REGISTER_USER
		});
		dispatch({
			type: REGISTER_SUCCESS
		});
		setTimeout(() => {
			dispatch({ type: REGISTER_RESET });
		}, 1500);
		dispatch(
			setAlert(
				`User ${res.data.name} has been registered with ${res.data.rate} rate`
			)
		);
	} catch (error) {
		dispatch(setAlert("Register fail", "danger"));
	}
};

export const loadUser = () => async dispatch => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

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

export const resetPassword = (password, id, token) => async dispatch => {
	try {
		const res = await axios.post(
			`/user/password/reset/${id}/${token}`,
			password,
			{
				headers: { "Content-Type": "application/json" }
			}
		);
		dispatch(
			setAlert(
				`Thank you ${res.data.name} Password successfully changed, Now you can log in with new credentials`,
				"success"
			)
		);
		dispatch({
			type: PASSWORD_CHANGE_SUCCESS
		});
	} catch (error) {
		dispatch(
			setAlert(
				"Looks like this link is not valid any more, Try again or contact us hotellaki@hotellaki.is",
				"danger"
			)
		);
	}
};

export const sendEmailWithResetLink = email => async dispatch => {
	try {
		await axios.post("/user/forgot-password", email, {
			headers: { "Content-Type": "application/json" }
		});
		dispatch({ type: EMAIL_SENT });
		dispatch(setAlert("Click on the link in your mailbox", "success"));
	} catch (error) {
		dispatch(
			setAlert(
				"There is no account associated with this email address",
				"danger"
			)
		);
	}
};
