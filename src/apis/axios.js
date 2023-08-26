import axios from "axios";

// const api = "http://localhost:10000";
const api = "https://cake-shop-9su5.onrender.com";

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
  credentials: "include",
});

axiosInstance.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (`token: ${token}`) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  function error() {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
