import React from "react";
import "./Avatar.scss";
import { HiOutlineChevronDown } from "react-icons/hi";

const Avatar = () => {
  return (
    <div className="avatar_wrapper">
      <img
        className="avatar__image"
        src="https://lh3.googleusercontent.com/a/ACg8ocIA7zmOBAB_Z6KKHejBXAkjRYe1PASZecMV41rAj5mzSQ=s96-c"
        alt=""
        width={40}
        height={40}
      />
      <HiOutlineChevronDown />
    </div>
  );
};

export default Avatar;
