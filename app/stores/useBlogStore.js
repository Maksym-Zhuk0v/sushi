import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../../lib/axios";

export const useBlogStore = create((set, get) => ({
  blogs: [],
  loading: false,
  singleBlog: null,

  fetchAllBlogs: async () => {
    set({ loading: true });

    try {
      if (get().blogs.length > 0) {
        set({ loading: false });
        return;
      }
      const response = await axios.get("/blog");
      set({ blogs: response.data, loading: false });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch blogs");
      set({ loading: false });
    }
  },
  fetchSingleBlog: async (id) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/blog/${id}`);
      set({ singleBlog: response.data, loading: false });
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch blog");
      set({ loading: false });
    }
  },

  createBlog: async (blogData) => {
    set({ loading: true });
    try {
      const res = await axios.post("/blog", blogData);
      set((prevState) => ({
        blogs: [...prevState.blogs, res.data],
        loading: false,
      }));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create blog");
      set({ loading: false });
    }
  },

  updateBlog: async (id, blogData) => {
    set({ loading: true });
    try {
      const response = await axios.post(`/blog/${id}`, blogData);
      set((prevState) => ({
        blogs: prevState.blogs.map((blog) =>
          blog._id === id ? { ...blog, ...response.data } : blog
        ),
        loading: false,
      }));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update blog");
      set({ loading: false });
    }
  },

  deleteBlog: async (id) => {
    set({ loading: true });
    try {
      await axios.delete(`/blog/${id}`);
      set((prevState) => ({
        blogs: prevState.blogs.filter((blog) => blog._id !== id),
        loading: false,
      }));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete blog");
      set({ loading: false });
    }
  },
}));
