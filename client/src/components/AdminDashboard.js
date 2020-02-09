import React from "react";
import { connect } from "react-redux";
import AvailabilityTable from "./AvailabilityTable";
import Calendar from "./Calendar";
import Options from "./Options";

const AdminDashboard = ({ user }) => {
  return (
    <div>
      {" "}
      <div>
        {user === "adminlaki" && (
          <div className="container">
            <Options />
          </div>
        )}

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
    </div>
  );
};

export default connect(state => ({ user: state.auth.name }))(AdminDashboard);
