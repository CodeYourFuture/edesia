const config = require("../knexfile")[process.env.NODE_ENV || "development"];

const knex = require("knex")(config);

const getUsers = () => {
  return knex.select().from("users");
};
<<<<<<< HEAD

const getNotifications = () => {
  return knex.select().from("notifications");
};

=======
const saveUser = (name, email, password, city, postcode) => {
  return knex("users")
    .insert({ name, email, password, city, postcode })
    .returning("*");
};
>>>>>>> b398b81542e9991f394150b2ca178b1a3e7d34eb
const getSingleUser = (email, password) => {
  return knex("users")
    .where({ email, password })
    .first();
};
const getUserProfile = userId => {
  return knex("users")
    .select("user_id", "email", "name")
    .where({ user_id: userId })
    .first();
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

const getContacts = () => {
  return knex.select().from("contacts");
};

const updateUser = data => {
  return knex
    .table("users")
    .where("user_id", "=", data.user_id)
    .update({
      name: data.name,
      email: data.email,
      city: data.city,
      postcode: data.postcode
    });
};
module.exports = {
  getUsers,
  getDeliveries,
  getNotifications,
  getDrivers,
  getStores,
  getStoresContacts,
  getContacts,
  updateUser,
  getSingleUser,
  getUserProfile,
  saveUser
};
