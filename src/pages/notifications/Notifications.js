import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Info from "./component/Info";

const Notifications = () => {
  return (
    <div>
      <Navbar name="Notifications" />
      <Sidebar />
      <Info />
    </div>
  );
};

export default Notifications;
