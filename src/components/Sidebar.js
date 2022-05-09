import React from "react";
import { IconContext } from "react-icons";
import "../components/Sidebar.scss";
import { MdDashboard } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { HiOutlineUserAdd } from "react-icons/hi";
import { FaCog } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import icon from "../components/images/icon.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <IconContext.Provider
      value={{ color: "white", size: "1.4em", margin: "10px" }}
      id="icons"
    >
      <div className="side">
        <dl>
          <Link to="/">
            <img src={icon} id="icon" alt="" />
          </Link>
          <dt>
            <span id="time">Timekeepr</span>
          </dt>
          
          <dt id="toggle">
            <span className="pad">
              <MdDashboard />
            </span>
            <Link to="/dashboard">Dashboard</Link>
          </dt>
          <dt id="toggle">
            <span className="pad">
              <HiOutlineUserAdd />
            </span>
            <Link to="/add-user">Add user</Link>
          </dt>
          <dt id="toggle">
            <span className="pad">
              <IoIosPeople />
            </span>
            <Link to="/user">View users</Link>
          </dt>
          <dt id="toggle">
            <span className="pad">
              <SiSimpleanalytics />
            </span>
            <Link to="/analytics">Analytics</Link>
          </dt>
          <dt id="toggle">
            <span className="pad">
              <BsFillBellFill />
            </span>
            <Link to="/notifications">Notifications</Link>
          </dt>
          <dt id="toggle">
            <span className="pad">
              <FaCog />
            </span>
            <Link to="/settings">Settings</Link>
          </dt>
        </dl>
      </div>
    </IconContext.Provider>
  );
};

export default Sidebar;
