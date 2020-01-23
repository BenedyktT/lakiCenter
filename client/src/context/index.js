import moment from "moment";
import React from "react";
import axios from "axios";
const Context = React.createContext();
export const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "FOCUS_INPUT":
      return {
        ...state,
        focusedInput: payload.focusedInput
      };
    case "SET_CALENDAR":
      const { startDate, endDate } = payload;
      return { ...state, startDate, endDate };

    default:
      return state;
  }
};
export class CalendarState extends React.Component {
  state = {
    startDate: moment(),
    endDate: moment().add(1, "day"),
    focusedInput: null,
    test: null,
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  // nie dziala warunek component updatuje sie czy end date null co powoduje error :/

  /* async componentDidUpdate(prevProps, prevState) {
    if (
      !moment(prevState.startDate).isSame(this.state.startDate, "day") ||
      (!moment(prevState.endDate).isSame(this.state.endDate, "day") &&
        typeof this.state.startDate === "object" &&
        typeof this.state.endDate === "object")
    ) {
      try {
        let { startDate, endDate } = this.state;
        startDate = moment(startDate).format("YYYY-MM-DD");
        endDate = moment(endDate).format("YYYY-MM-DD");
        const res = await axios.get(
          `/availability/${startDate}/${endDate}/LAKI`
        );

        this.setState(() => ({ test: res.data }));
        console.log(this.state.test);
      } catch (error) {
        console.error(error);
      }
    }
  } */

  render() {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }
}

export const CalendarConsumer = Context.Consumer;
