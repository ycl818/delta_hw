import "./Sidebar.scss";
import Hamburger from "hamburger-react";
import { MdElectricBolt } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { MdInsertChart } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { SlBriefcase } from "react-icons/sl";
import { GoLink } from "react-icons/go";
import { PiShareNetworkLight } from "react-icons/pi";
import { IoHelpCircleOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";

const links = [
  { name: "概觀", icon: <RxDashboard /> },
  { name: "餘電匹配分析", icon: <MdInsertChart /> },
  { name: "基本資料", icon: <MdOutlineShoppingCartCheckout /> },
  { name: "轉供電量", icon: <SlBriefcase /> },
  { name: "轉供最佳化", icon: <GoLink /> },
  { name: "契約最佳化", icon: <PiShareNetworkLight /> },
  { name: "幫助", icon: <IoHelpCircleOutline /> },
  { name: "設定", icon: <CiSettings /> },
  { name: "登出", icon: <IoLogOutOutline /> },
];

export const Sidebar = ({ isOpen, setOpen }) => {
  return (
    <>
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar__inner">
          <nav className="sidebar__menu">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div className="sidebar__header" onClick={() => setOpen(!isOpen)}>
                <MdElectricBolt className="sidebar__header-icon" />
                <p>綠電匹配服務</p>
              </div>
              <Hamburger
                className="sidebar__menu-icon"
                label="Show menu"
                duration={0.8}
                rounded
                size={17}
                toggled={isOpen}
                toggle={setOpen}
              />
            </div>
            <hr className="sidebar__horizon" />
            {links.map((item, idx) => (
              <button
                key={item.name}
                type="button"
                className={`sidebar__button sidebar__button-${idx}`}
              >
                <span>{item.icon}</span>
                <p>{item.name}</p>
              </button>
            ))}
          </nav>
        </div>
      </nav>
    </>
  );
};
