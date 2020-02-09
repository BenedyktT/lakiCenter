import moment from "moment";
import {
  FOCUS_INPUT,
  SET_CALENDAR,
  LOAD_AVAILABILITY,
  SET_RATE_TYPE
} from "../actions/types";
const initialState = {
  startDate: moment(),
  endDate: moment().add(1, "day"),
  isDateRangeSelected: null,
  focusedInput: null,
  availability: [],
  rateType: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FOCUS_INPUT:
      return {
        ...state,
        focusedInput: payload.focusedInput
      };
    case SET_CALENDAR:
      const { startDate, endDate } = payload;
      if (startDate && endDate)
        return { ...state, isDateRangeSelected: true, startDate, endDate };
      return { ...state, startDate, endDate, isDateRangeSelected: false };
    case LOAD_AVAILABILITY:
      return { ...state, availability: payload };
    case SET_RATE_TYPE:
      return { ...state, rateType: payload };
    default:
      return state;
  }
};
