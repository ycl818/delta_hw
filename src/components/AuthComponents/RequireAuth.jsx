import React, { useLayoutEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import axios from "../../api/axios";

const RequireAuth = () => {
  const { auth, setAuth } = useAuth();
  console.log("🚀 ~ RequireAuth ~ auth:", auth);
  const location = useLocation();

  useLayoutEffect(() => {
    const getUser = async () => {
      try {
        const response = axios.get("/auth/login/success", {
          withCredentials: true,
        });
        console.log("🚀 ~ getUser ~ response:", response);
        const username = response.data?.user?.name;
        const mail = response.data?.user?.account;
        const userphoto = response.data?.user?.photo;

        setAuth({ username, mail, userphoto });
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
