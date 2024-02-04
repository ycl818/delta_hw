import React from "react";
import "./Navbar.scss";
import Searchbar from "./Searchbar/Searchbar";

import Avatar from "./Avatar/Avatar";
import NotificationBell from "./NotificationBell/NotificationBell";
import { useLocation } from "react-router-dom";

const pageTitleArray = [
  { pathName: "/", pageTitleBig: "概觀", pageTitleSmall: "概觀報告" },
  {
    pathName: "/power-flow-analyzer",
    pageTitleBig: "餘電匹配分析",
    pageTitleSmall: "  Monitor progress regularity to increase sales",
  },
  {
    pathName: "/power-transfer",
    pageTitleBig: "轉供電量",
    pageTitleSmall: "發電及用電轉供資訊",
  },
];

const Navbar = ({ isOpen }) => {
  const { pathname } = useLocation();

  const resTitle = pageTitleArray.filter((title) =>
    title.pathName === pathname ? title : null
  );

  return (
    <div className={`navbar__container ${isOpen ? "shrink" : ""}`}>
      <div className="navbar__leftGroup">
        <div className="pageTitle">
          <p className="pageTitle-big">{resTitle[0]?.pageTitleBig}</p>
          <p className="pageTitle-small">{resTitle[0]?.pageTitleSmall}</p>
        </div>
      </div>

      <div className="navbar__rightGroup">
        <Searchbar />
        <NotificationBell />
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
