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

export const updateDeliveryDetail = async (delivery_id, content) => {
  return await instance
    .put(`/api/deliveries/${delivery_id}`, content)
    .then(res => res.data);
};
export const updateDriverDetail = async (user_id, content) => {
  return await instance
    .put(`/api/drivers/${user_id}`, content)
    .then(res => res.data);
};
export const getDriverById = user_id => {
  return instance.get(`/api/drivers/${user_id}`);
};

export const deleteDelivery = async delivery_id => {
  return await instance.delete(`/api/deliveries/${delivery_id}`);
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

export const getUsersAdmin = () => {
  return instance.get("/api/admin/users");
};
export const addDrivers = (name, email, password, city, postcode, role) => {
  return instance.post("/api/admin/users", {
    name,
    email,
    city,
    postcode,
    role,
    password
  });
};

export const addDeliveries = (address, deadline, status, store_name) => {
  return instance.post("/api/admin/deliveries", {
    address,
    deadline,
    status,
    store_name
  });
};
export const getDeliveryById = delivery_id => {
  return instance.get(`/api/deliveries/${delivery_id}`);
};

export const getMyDeliveries = driver_id => {
  return instance.get(`/api/deliveries/driver/${driver_id}`);
};

export const getUserProfile = () => {
  const token = localStorage.getItem("jwtToken");
  const AuthStr = "Bearer ".concat(token);
  return instance.get("/user/profile", {
    headers: { Authorization: AuthStr }
  });
};
export const pickupDelivery = delivery_id => {
  const token = localStorage.getItem("jwtToken");
  const AuthStr = "Bearer ".concat(token);

  return instance.put(`/api/deliveries/${delivery_id}/pickup`, {
    headers: { Authorization: AuthStr }
  });
};

export const loginUser = async (email, password) => {
  const { data } = await instance.post("/auth/login", { email, password });
  localStorage.setItem("jwtToken", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
  axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  return data.token;
};
