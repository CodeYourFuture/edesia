const API_URL = process.env.REACT_APP_API_URI || "/";

export const getUsers = () => {
  return fetch(`${API_URL}/api/users`).then(res => res.json());
};

export const getDelivers = () => {};

export const getNotifications = () => {
  return fetch(`${API_URL}/api/notifications`).then(res => res.json());
};
export const getStoresContacts = () => {
  return fetch(`${API_URL}/api/stores_contacts`).then(res => res.json());
};
