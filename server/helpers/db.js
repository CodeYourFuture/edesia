const config = require("../knexfile")[process.env.NODE_ENV || "development"];

const knex = require("knex")(config);

const getUsers = () => {
  return knex.select().from("users");
};

const getNotifications = () => {
  return knex.select().from("notifications");
};

const getDeliveries = () => {
  return knex.select().from("deliveries");
};
const getDrivers = () => {
  return knex.select().from("drivers");
};

const getStores = () => {
  return knex.select().from("stores");
};
const getStoresContacts = () => {
  return knex.select().from("stores_contacts");
};

module.exports = {
  getUsers,
  getDeliveries,
  getNotifications,
  getDrivers,
  getStores,
  getStoresContacts
};
