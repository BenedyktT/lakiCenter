import React, { useEffect } from "react";
import AvailabilityTable from "./AvailabilityTable";
import Calendar from "./Calendar";
import { connect } from "react-redux";
import { loadAvailability } from "../redux/actions/availability";

const Dashboard = ({
  history,
  user,
  loading,
  isDateRangeSelected,
  startDate,
  endDate,
  loadAvailability,
  availability
}) => {
  useEffect(() => {
    if (isDateRangeSelected) {
      loadAvailability(startDate, endDate);
    }
  }, [isDateRangeSelected, startDate, endDate]);
  useEffect(() => {
    if (user === "adminlaki" && !loading) {
      history.push("/admin");
      return;
    }
    if (availability.length) {
      return;
    } else {
      loadAvailability();
    }
  }, []);
  return (
    <div>
      <Calendar />
      <AvailabilityTable />
      <div className="">
        <p>
          Pick reservation date and see how many rooms we have available, and
          what best rate we can offer. <br />
          Rates visible in table above are for 1 room
        </p>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    user: state.auth.name,
    isDateRangeSelected: state.availability.isDateRangeSelected,
    startDate: state.availability.startDate,
    endDate: state.availability.endDate,
    loading: state.auth.loading,
    availability: state.availability.availability
  }),
  { loadAvailability }
)(Dashboard);
