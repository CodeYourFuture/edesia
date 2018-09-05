const axios = require("axios");
const API_URL = process.env.REACT_APP_API_URI || "/";

const instance = axios.create({
  baseURL: API_URL
});

export const getUsers = () => {
  return instance.get("api/users").then(res => res.data);
};

export const updateUserProfile = async (user_id, content) => {
  return await instance
    .put(`/api/users/${user_id}`, content)
    .then(res => res.data);
};

export const postUser = (email, password, name, city, postcode) => {
  return instance.post("/api/users", { email, password, name, city, postcode });
};

export const getDeliveries = async () => {
  return await instance.get("/api/deliveries");
};
export const getDeliveriesAdmin = () => {
  return instance.get("/api/admin/deliveries");
};
export const getDeliveryById = delivery_id => {
  return instance.get(`/api/deliveries/${delivery_id}`);
};
export const getUserProfile = () => {
  return instance.get("/user/profile");
};

export const loginUser = async (email, password) => {
  const { data } = await instance.post("/auth/login", { email, password });
  localStorage.setItem("jwtToken", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
  axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  return data.token;
};
