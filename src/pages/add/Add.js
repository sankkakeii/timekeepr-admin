import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import AddUserForm from "./component/AddUserForm";

const Add = () => {
  return (
    <div>
      <Navbar name="Add users" />
      <Sidebar />
      <AddUserForm />
    </div>
  );
};

export default Add;
