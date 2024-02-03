import React from "react";
import "./Dashboard.scss";

const Dashboard = ({ isOpen }) => {
  return (
    <div className={`dashboard__container ${isOpen ? "shrink" : ""}`}>
      Here is Dashboard
    </div>
  );
};

export default Dashboard;
