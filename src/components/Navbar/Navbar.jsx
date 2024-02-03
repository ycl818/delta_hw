import React, { useState } from "react";
import "./Navbar.scss";
import Hamburger from "hamburger-react";
import { Sidebar } from "../Sidebar/Sidebar";

const Navbar = ({ isOpen, setOpen }) => {
  return (
    <>
      <div className={`navbar__container ${isOpen ? "shrink" : ""}`}></div>

      <Sidebar isOpen={isOpen} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
