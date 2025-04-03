import axiosBase from "axios";

export const axios = axiosBase.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true,
  timeout: 10000,
});

