const API_URL = process.env.REACT_APP_API_URI || "/";

export const getUsers = () => {
  return fetch(`${API_URL}api/users`).then(res => res.json());
};

export const getDelivers = () => {};
