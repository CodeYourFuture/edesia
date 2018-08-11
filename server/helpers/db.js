const config = require("../knexfile")[process.env.NODE_ENV || "development"];

const knex = require("knex")(config);

const getUsers = () => {
  return knex.select().from("users");
};
<<<<<<< HEAD
const getNotifications = () => {
  return knex.select().from("notifications")
};

module.exports = {
  getNotifications: getNotifications,
  getUsers: getUsers
};
=======
const getDeliveries = () => {
  return knex.select().from("deliveries");
};
const getDrivers = () => {
  return knex.select().from("drivers");
};

const getStores = () => {
  return knex.select().from("stores");
};

module.exports = {
  getUsers,
  getDeliveries,
  getDrivers,
  getStores
};
>>>>>>> e49d1e2a8159b826dd3513a3f23b64d2210adbb0
