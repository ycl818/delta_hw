import React from "react";
import { CiSearch } from "react-icons/ci";
import "./Searchbar.scss";

const Searchbar = () => {
  return (
    <div className="input-wrapper">
      <CiSearch id="search-icon" />
      <input placeholder="Search anything..." />
    </div>
  );
};

export default Searchbar;
