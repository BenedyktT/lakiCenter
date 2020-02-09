import { LOGOUT_USER, LOGIN_USER, LOAD_USER, REGISTER_USER } from "./types";
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
