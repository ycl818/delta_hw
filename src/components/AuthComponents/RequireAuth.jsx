import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const { auth } = useAuth();
  console.log("🚀 ~ RequireAuth ~ auth:", auth);
  const location = useLocation();

  return auth?.mail ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
