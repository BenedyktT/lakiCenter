import { TOGGLE_HAMBURGER_VISIBILITY } from "../actions/types";

const initialState = {
	isHamburgerActive: false
};
export default (state = initialState, { type }) => {
	switch (type) {
		case TOGGLE_HAMBURGER_VISIBILITY:
			return { ...state, isHamburgerActive: !state.isHamburgerActive };

		default:
			return state;
	}
};
