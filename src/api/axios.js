import axios from "axios";
import Cookies from "js-cookie";
import { LANGUAGE_VERSIONS } from "./common";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [  
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`, // URL API của Laravel
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axiosClient.interceptors.response.use((response) => {
//     return response
// }, async error => {
//     const originalRequest = error.config
//     if (error.response && error.response.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true

//         const refreshToken = Cookies.get('')
//     }
//     return Promise.reject(error);
// })

export default axiosClient;
