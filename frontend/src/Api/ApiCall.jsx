import axios from "axios";

export const ApiCall = axios.create({
  baseURL: import.meta.env.VITE_API,
  withCredentials: true,
});
