import React, { useLayoutEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import axios from "../../api/axios";

const RequireAuth = () => {
  const { auth } = useAuth();
  console.log("🚀 ~ RequireAuth ~ auth:", auth);
  const location = useLocation();

  useLayoutEffect(() => {
    const getUser = async () => {
      try {
        const response = axios.get("/login/success", { withCredentials: true });
        console.log("🚀 ~ getUser ~ response:", response);
        // const mail =
        // setAuth()
      } catch (error) {
        console.log("🚀 ~ getUser ~ error:", error);
      }
    };

    getUser();
  }, []);

  return auth?.mail ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
