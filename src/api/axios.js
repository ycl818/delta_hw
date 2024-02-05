import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3500",
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:3500",
});
