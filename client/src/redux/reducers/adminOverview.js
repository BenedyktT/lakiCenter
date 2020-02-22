import { GET_MONTHLY_OVERVIEW } from "../actions/types";
const initialState = [];

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_MONTHLY_OVERVIEW:
			return [...payload];

		default:
			return state;
	}
};
