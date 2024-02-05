import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import useRefreshToken from "../../hooks/useRefreshToken";
import useAuth from "../../hooks/useAuth";
import { Outlet } from "react-router-dom";
import PuffLoader from "../Loader/PuffLoader";
import axios from "../../api/axios";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, setAuth } = useAuth();

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
        setIsLoading(false);
      } catch (error) {
        console.log("🚀 ~ getUser ~ error:", error);
      }
    };

    getUser();
  }, [setAuth]);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        if (isLoading) {
          await refresh();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   console.log(`isLoading: ${isLoading}`);
  //   console.log(`aT: ${JSON.stringify(auth?.accessToken)}`);
  // }, [isLoading]);

  return <>{isLoading ? <PuffLoader /> : <Outlet />}</>;
};

export default PersistLogin;
