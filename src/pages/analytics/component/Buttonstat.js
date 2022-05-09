import React from "react";
import "../component/Buttonstat.scss";

const Buttonstat = () => {
  return (
    <div className="stats">
      <button id="stat">Weekly Analytics</button>
      <button id="stat">Monthly Analytics</button>
      <button id="stat">Yearly Analytics</button>
    </div>
  );
};

export default Buttonstat;
