import React from "react";
import "./Dashboard.scss";
import { Outlet } from "react-router-dom";

const Dashboard = ({ isOpen }) => {
  return (
    <div className={`dashboard__container ${isOpen ? "shrink" : ""}`}>
      <Outlet />
    </div>
  );
};

export default Dashboard;
