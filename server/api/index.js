const express = require("express");
const router = express.Router();
const db = require("../helpers/db");

router.get("/status", (req, res) => {
  res.send({
    status: "OK"
  });
});

router.get("/users", (req, res) => {
  db.getUsers().then(data => {
    res.send(data);
  });
});

router.get("/notifications", (req, res) => {
  db.getNotifications().then(data => {
    res.send(data);
  });
});

router.get("/stores", (req, res) => {
  db.getStores().then(data => {
    res.send(data);
  });
});

router.get("/deliveries", async (req, res) => {
  const data = await db.getDeliveries();
  res.send(data);
});
router.get("/drivers", async (req, res) => {
  const data = await db.getDrivers();
  res.send(data);
});

router.get("/items", (req, res) => {
  db.getItems().then(data => {
  });
  
router.get("/contacts", (req, res) => {
  db.getContacts().then(data => {
    res.send(data);
  });
});

module.exports = router;
