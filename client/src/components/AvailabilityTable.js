import React, { useEffect } from "react";
import { loadAvailability } from "../redux/actions/availability";
import { connect } from "react-redux";

const AvailabilityTable = ({
  loadAvailability,
  availability,
  startDate,
  endDate,
  isDateRangeSelected
}) => {
  useEffect(() => {
    loadAvailability();
  }, []);
  useEffect(() => {
    if (isDateRangeSelected) {
      loadAvailability(startDate, endDate);
    }
  }, [isDateRangeSelected, startDate, endDate]);
  return (
    <div className="table-wrapper container">
      <table className="blueTable">
        <thead>
          <tr>
            <th></th>
            <th>Availability</th>
            <th>Rate</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Economy</td>
            <td>{availability ? availability[1].dayAvail.available : "?"}</td>
            <td>{availability ? availability[1].dayAvail.rate : "?"} ISK</td>
          </tr>
          <tr>
            <td>Standard</td>
            <td>{availability ? availability[2].dayAvail.available : "?"}</td>
            <td>{availability ? availability[2].dayAvail.rate : "?"} ISK</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default connect(
  state => ({
    availability: state.availability.availability,
    startDate: state.availability.startDate,
    endDate: state.availability.endDate,
    isDateRangeSelected: state.availability.isDateRangeSelected
  }),
  { loadAvailability }
)(AvailabilityTable);
