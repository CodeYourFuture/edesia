const API_URL = process.env.REACT_APP_API_URI || "http://localhost:4000";
const axios = require("axios");
const instance = axios.create({
  baseURL: API_URL
});

export const getUsers = () => {
  return fetch(`${API_URL}/api/users`).then(res => res.json());
};

export const getDelivers = () => {
  return fetch(`${API_URL}/api/deliveries`).then(res => res.json());
};
export const getUserProfile = () => {
  return instance.get("/user/profile");
};
export const loginUser = async (email, password) => {
  const { data } = await instance.post("/auth/login", { email, password });
  localStorage.setItem("jwtToken", data.token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  return data.token;
};
