
import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/auth`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const userAuthServices = {
  signup: async (userData) => {
    const { data } = await API.post("/signup", userData);
    return data;
  },

  login: async (userData) => {
    const { data } = await API.post("/login", userData);
    return data;
  },

  getCurrentUser: async () => {
    const { data } = await API.get("/me");
    return data;
  },

  logout: async () => {
    const { data } = await API.post("/logout");
    return data;
  },
};

export default API;
