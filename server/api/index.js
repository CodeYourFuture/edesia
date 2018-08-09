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


module.exports = router;