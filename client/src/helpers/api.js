const API_URL = process.env.REACT_APP_API_URI || "http://localhost:4000";

export const getUsers = () => {
  return fetch(`${API_URL}/api/users`).then(res => res.json());
};


export const getDelivers = () => {};
export const getNotifications = () => {
  return fetch(`${API_URL}/api/notifications`).then(res => res.json());
}