import React, { useState } from "react";
import "./Navbar.scss";
import Searchbar from "./Searchbar/Searchbar";

import Avatar from "./Avatar/Avatar";
import NotificationBell from "./NotificationBell/NotificationBell";

const Navbar = ({ isOpen }) => {
  return (
    <div className={`navbar__container ${isOpen ? "shrink" : ""}`}>
      <div className="navbar__leftGroup">
        <div className="pageTitle">
          <p className="pageTitle-big">餘電匹配分析</p>
          <p className="pageTitle-small">
            Monitor progress regularity to increase sales
          </p>
        </div>

        <div className="navbar__rightGroup">
          <Searchbar />
          <NotificationBell />
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
