import moment from "moment";

import { DateRangePicker } from "react-dates";
import { CalendarConsumer } from "../context";
import React, { Component } from "react";

export default class Calendar extends Component {
  state = {
    focusedInput: null
  };
  render() {
    return (
      <CalendarConsumer>
        {({ startDate, endDate, dispatch }) => {
          return (
            <div className="container">
              <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) =>
                  dispatch({
                    type: "SET_CALENDAR",
                    payload: { startDate, endDate }
                  })
                } // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                keepOpenOnDateSelect={false}
                minDate={moment().startOf("day")}
              />
            </div>
          );
        }}
      </CalendarConsumer>
    );
  }
}
