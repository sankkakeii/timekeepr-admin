import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Buttonstat from "./component/Buttonstat";
import profilepix from "./component/cv.image.jpg";
import Graph from "./component/Graph";

const Analytics = () => {
  return (
    <div>
      <Navbar name="Analytics" />
      <Sidebar />
      <Buttonstat />
      <div id="name" style={{ display: "flex", padding: "40px 70px" }}>
        <img
          src={profilepix}
          id="profilepix"
          alt=""
          style={{ height: "50px", borderRadius: "100%" }}
        />
        <h2
          style={{
            paddingLeft: "20px",
            color: "rgb(59, 59, 59)",
            fontSize: "30px",
            marginBottom: "10px",
          }}
        >
          Austin Onueze
        </h2>
      </div>
      <Graph />
    </div>
  );
};

export default Analytics;
