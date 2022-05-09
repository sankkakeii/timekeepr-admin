import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Records from "./component/Records";

const User = () => {
  return (
    <div>
      <Navbar name="View users" />
      <Sidebar />
      <Records />
    </div>
  );
};

export default User;
