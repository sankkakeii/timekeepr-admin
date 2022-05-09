import React from "react";
//import "antd/dist/antd.css";
import Switch from "react-switch";
import "../component/Geofence.scss";

const Geofence = () => {
  return (
    <div className="Geofence">
      <h2>Automatic Detection</h2>
      <div className="toggle">
        <Switch /> <span id="enable">Enable Geofencing</span>
      </div>
    </div>
  );
};

export default Geofence;
