import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5005/api"
      : process.env.NEXT_PUBLIC_URL_API,
  withCredentials: true,
});

export default axiosInstance;
