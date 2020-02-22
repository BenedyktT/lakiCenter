import { combineReducers } from "redux";
import auth from "./auth";
import availability from "./availability";
import alert from "./alert";
import layout from "./layout";
import adminOverview from "./adminOverview";

export default combineReducers({
	auth,
	availability,
	alert,
	layout,
	adminOverview
});
