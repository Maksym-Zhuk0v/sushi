import axios from "axios";

console.log(process.env.VERCEL_API_TOKEN);
console.log(process.env.NODE_ENV);

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5005/api/"
      : `${process.env.NEXT_PUBLIC_URL_API}/api/`,
  withCredentials: true,
  headers: {
    Authorization: `Bearer prj_ZD7bo2Iafqy9KNx2e9iWO4Vf5cdS`,
  },
});

export default axiosInstance;
