import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://easybooking-server.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
