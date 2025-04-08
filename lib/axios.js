import axios from "axios";

console.log(process.env.VERCEL_API_TOKEN);
console.log(process.env.NODE_ENV);

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "https://sushi-backend-ruby.vercel.app/api/"
      : "https://sushi-backend-ruby.vercel.app/api/",
  withCredentials: true,
});

export default axiosInstance;
