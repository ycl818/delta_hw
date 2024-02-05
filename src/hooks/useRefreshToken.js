import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.get("/refresh", {
        withCredentials: true,
      });
      console.log(
        "file: useRefreshToken.js:12 ~ refresh ~ response:",
        response
      );
      setAuth((prev) => {
        console.log("prevState: ", JSON.stringify(prev));
        console.log(response.data.accessToken);
        return {
          ...prev,
          accessToken: response.data.accessToken,
          username: response.data.username,
          mail: response.data.mail,
        };
      });

      return response.data.accessToken;
    } catch (error) {
      console.log(error);
    }
  };
  return refresh;
};

export default useRefreshToken;
