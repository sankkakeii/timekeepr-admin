import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/index";
import Signup from "./pages/SignUp/index";
import Dashboard from "./pages/dashboard/Dashboard";
import Add from "./pages/add/Add";
import User from "./pages/user/User";
import Analytics from "./pages/analytics/Analytics";
import Notifications from "./pages/notifications/Notifications";
import Settings from "./pages/settings/Settings";
import "../src/index.css";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="root">
      <BrowserRouter>
      <Routes>
        {user && <Route path="/dashboard" exact element={<Dashboard />} />}
        <Route exact path={"/login"} element={<Login />} />
        <Route exact path={"/signup"} element={<Signup />} />
        {/* <Route exact path={"/dashboard"} element={<Dashboard />} /> */}
        <Route exact path={"/add-user"} element={<Add />} />
        <Route exact path={"/user"} element={<User />} />
        <Route exact path={"/analytics"} element={<Analytics />} />
        <Route exact path={"/notifications"} element={<Notifications />} />
        <Route exact path={"/settings"} element={<Settings />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
