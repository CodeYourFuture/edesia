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

<<<<<<< HEAD
router.get("/notifications", (req, res) => {
  db.getNotifications().then(data => {
=======
router.get("/stores", (req, res) => {
  db.getStores().then(data => {
>>>>>>> e49d1e2a8159b826dd3513a3f23b64d2210adbb0
    res.send(data);
  });
});

<<<<<<< HEAD

module.exports = router;
=======
router.get("/deliveries", async (req, res) => {
  const data = await db.getDeliveries();
  res.send(data);
});
router.get("/drivers", async (req, res) => {
  const data = await db.getDrivers();
  res.send(data);
});

module.exports = router;
>>>>>>> e49d1e2a8159b826dd3513a3f23b64d2210adbb0
