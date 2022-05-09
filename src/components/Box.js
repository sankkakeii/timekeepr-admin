import React from "react";
import "../components/Box.scss";

const Box = () => {
  let total = 450
  let early = 300
  let late = 100
  let absent = 50

  return (
    <div className="line">
      <div className="hr">
        <hr></hr>
        <span></span>
      </div>
      <div className="report">GENERATE REPORT</div>

      <div className="box">
        <div className="total">
          {total}
          <h6>Total Staff</h6>
        </div>

        <div className="early">
          {early}
          <h6>On Time</h6>
        </div>

        <div className="late">
          {late}
          <h6>Late</h6>
        </div>

        <div className="absent">
          {absent}
          <h6>Absent</h6>
        </div>
      </div>
    </div>
  );
};

export default Box;
