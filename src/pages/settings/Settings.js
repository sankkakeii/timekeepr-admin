import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Details from "./component/Details";

const Settings = () => {
  return (
    <div>
      <Navbar name="Settings" />
      <Sidebar />
      <Details />
    </div>
  );
};

export default Settings;
