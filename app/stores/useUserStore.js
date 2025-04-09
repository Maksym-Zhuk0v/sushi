import { create } from "zustand";
import axios from "../../lib/axios";
import { toast } from "react-hot-toast";
import { verify } from "crypto";

export const useUserStore = create((set, get) => ({
  user: null,
  loading: false,
  checkingAuth: true,

  signup: async ({ name, email, password, confirmPassword }) => {
    set({ loading: true });

    console.log(name, email);

    if (password !== confirmPassword) {
      set({ loading: false });
      return toast.error("Passwords do not match");
    }

    try {
      const res = await axios.post("/user/signup", { name, email, password });
      await axios.post("/mail", {
        to: email,
        subject: "Welcome",
        text: "aprove the mail",
      });
      set({ user: res.data, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.message || "An error occurred");
    }
  },
  checkBackend: async () => {
    try {
      const response = await axios.get("/mail");
      console.log(response.data);
      toast.success(response.data);
    } catch (error) {
      console.log(error.message);
    }
  },

  login: async (email, password) => {
    set({ loading: true });

    try {
      const res = await axios.post("/user/login", { email, password });
      toast.success("Login successful");

      set({ user: res.data, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error(error.message || "An error occurred");
    }
  },
  verify: async (code) => {
    try {
      console.log(code);
      await axios.post("/user/verify", { code });
      toast.success("Email verified successfully");
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  },

  logout: async () => {
    try {
      await axios.post("/user/logout");
      toast.success("Logout successful");
      set({ user: null });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred during logout"
      );
    }
  },

  checkAuth: async () => {
    set({ checkingAuth: true });
    try {
      const response = await axios.get("/user/profile");
      set({ user: response.data, checkingAuth: false });
    } catch (error) {
      console.log(error.message);
      set({ checkingAuth: false, user: null });
    }
  },

  refreshToken: async () => {
    if (get().checkingAuth) return;

    set({ checkingAuth: true });
    try {
      const response = await axios.post("/user/refresh-token");
      set({ checkingAuth: false });
      return response.data;
    } catch (error) {
      set({ user: null, checkingAuth: false });
      throw error;
    }
  },
}));

let refreshPromise = null;

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        if (refreshPromise) {
          await refreshPromise;
          return axios(originalRequest);
        }

        refreshPromise = useUserStore.getState().refreshToken();
        await refreshPromise;
        refreshPromise = null;

        return axios(originalRequest);
      } catch (refreshError) {
        useUserStore.getState().logout();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
