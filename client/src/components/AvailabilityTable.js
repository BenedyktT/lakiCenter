import React, { useContext, useEffect } from "react";
import { CalendarConsumer } from "../context";
import { Context } from "../context/index";

const AvailabilityTable = () => {
  const context = useContext(Context);
  const { startDate, endDate, fetch, availability } = context;
  useEffect(() => {
    fetch();
  }, []);
  return (
    <CalendarConsumer>
      {({ availability }) => {
        if (availability) {
        }
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
                  <td>{availability ? availability[1].availability : "?"}</td>
                  <td>{availability ? availability[1].rate : "?"}</td>
                </tr>
                <tr>
                  <td>Standard</td>
                  <td>{availability ? availability[0].availability : "?"}</td>
                  <td>{availability ? availability[0].rate : "?"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }}
    </CalendarConsumer>
  );
};

export default AvailabilityTable;
