import React from "react";
import "./Avatar.scss";
import { HiOutlineChevronDown } from "react-icons/hi";
import useAuth from "../../../hooks/useAuth";

const Avatar = () => {
  const { auth } = useAuth();
  console.log("🚀 ~ Avatar ~ userphoto:", auth);

  return (
    <div className="avatar_wrapper">
      <img
        className="avatar__image"
        src={
          auth.userphoto
            ? auth.userphoto
            : "https://lh3.googleusercontent.com/a/ACg8ocIA7zmOBAB_Z6KKHejBXAkjRYe1PASZecMV41rAj5mzSQ=s96-c"
        }
        alt="Avatar"
        width={40}
        height={40}
      />
      <HiOutlineChevronDown />
    </div>
  );
};

export default Avatar;
