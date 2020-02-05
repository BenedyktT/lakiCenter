import { combineReducers } from "redux";
import auth from "./auth";
import availability from "./availability";

export default combineReducers({ auth, availability });
