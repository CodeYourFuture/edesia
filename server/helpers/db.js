const config = require("../knexfile")[process.env.NODE_ENV || "development"];

const knex = require("knex")(config);

const getUsers = () => {
  return knex.select().from("users");
};
const getNotifications = () => {
  return knex.select().from("notifications")
};

module.exports = {
  getNotifications: getNotifications,
  getUsers: getUsers
};