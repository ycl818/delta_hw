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
import { Link, useLocation, useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

const links = [
  { name: "概觀", icon: <RxDashboard />, linkName: "" },
  {
    name: "餘電匹配分析",
    icon: <MdInsertChart />,
    linkName: "power-flow-analyzer",
  },
  {
    name: "轉供電量",
    icon: <MdOutlineShoppingCartCheckout />,
    linkName: "power-transfer",
  },
  { name: "基本資料", icon: <SlBriefcase />, linkName: "essential-data" },
  { name: "轉供最佳化", icon: <GoLink />, linkName: "opti-transfer" },
  {
    name: "契約最佳化",
    icon: <PiShareNetworkLight />,
    linkName: "opti-agreement",
  },
  { name: "幫助", icon: <IoHelpCircleOutline />, linkName: "help" },
  { name: "設定", icon: <CiSettings />, linkName: "settings" },
  { name: "登出", icon: <IoLogOutOutline />, linkName: "logout" },
];

export const Sidebar = ({ isOpen, setOpen }) => {
  const { pathname } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const pathName = pathname.split("/")[1];

  const logout = useLogout();

  const signOut = async (linkName) => {
    if (linkName === "logout") {
      await logout();
      navigate(from, { replace: true });
    } else {
      return;
    }
  };

  return (
    <>
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar__inner">
          <nav className="sidebar__menu">
            <div className="sidebar__header-wrapper">
              <div className="sidebar__header" onClick={() => setOpen(!isOpen)}>
                <MdElectricBolt className="sidebar__header-icon" />
                <p>綠電匹配服務</p>
              </div>
              <Hamburger
                className="sidebar__menu-icon"
                label="Show menu"
                duration={0.8}
                rounded
                size={12}
                toggled={isOpen}
                toggle={setOpen}
              />
            </div>
            {/* <hr className="sidebar__horizon" /> */}
            {links.map((item, idx) => (
              <Link
                key={item.name}
                className={`sidebar__link ${
                  pathName === item.linkName ? "active" : ""
                }`}
                to={`${item.linkName}`}
                onClick={() => signOut(item.linkName)}
              >
                <button
                  key={item.name}
                  type="button"
                  className={`sidebar__button sidebar__button-${idx}`}
                  onClick={() => setOpen(false)}
                >
                  <span>{item.icon}</span>
                  <p>{item.name}</p>
                </button>
              </Link>
            ))}
          </nav>
        </div>
      </nav>
    </>
  );
};
