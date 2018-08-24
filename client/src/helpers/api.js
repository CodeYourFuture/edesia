const API_URL = process.env.REACT_APP_API_URI || "http://localhost:4000";
<<<<<<< HEAD

export const getUsers = () => {
  return fetch(`${API_URL}/api/users`).then(res => res.json());
};

export const getDelivers = () => {};

export const getNotifications = () => {
  return fetch(`${API_URL}/api/notifications`).then(res => res.json());
};
export const getStoresContacts = () => {
  return fetch(`${API_URL}/api/stores_contacts`).then(res => res.json());
=======
const axios = require("axios");
const instance = axios.create({
  baseURL: API_URL
});

export const getUsers = () => {
  return instance.get("/api/users").then(res => res);
};
export const postUser = (email, password, name, city, postcode) => {
  return instance.post("/api/users", { email, password, name, city, postcode });
};

export const getDeliveries = () => {
  return instance.get("/api/deliveries").then(res => res);
};
export const getUserProfile = () => {
  return instance.get("/user/profile");
};
export const loginUser = async (email, password) => {
  const { data } = await instance.post("/auth/login", { email, password });
  localStorage.setItem("jwtToken", data.token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  return data.token;
>>>>>>> b398b81542e9991f394150b2ca178b1a3e7d34eb
};
