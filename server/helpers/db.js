const config = require("../knexfile")[process.env.NODE_ENV || "development"];

const knex = require("knex")(config);

const getUsers = () => {
  return knex.select().from("users");
};
const getDeliveries = () => {
  return knex.select().from("deliveries");
};

const getStores = () => {
  return knex.select().from("stores");
};

module.exports = {
  getUsers: getUsers,
  getStores,
  getDeliveries: getDeliveries
};
