import { TOGGLE_HAMBURGER_VISIBILITY } from "./types";
export const toggleHamburger = () => dispatch => {
	dispatch({
		type: TOGGLE_HAMBURGER_VISIBILITY
	});
};
