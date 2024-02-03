import React from "react";
import "./NotificationBell.scss";
import { TbBell } from "react-icons/tb";

const NotificationBell = () => {
  return (
    <div className="notificationBell">
      <TbBell className="notificationBell__icon" />
    </div>
  );
};

export default NotificationBell;
