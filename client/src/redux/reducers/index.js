import { combineReducers } from "redux";
import auth from "./auth";
import availability from "./availability";
import alert from "./alert";

export default combineReducers({ auth, availability, alert });
