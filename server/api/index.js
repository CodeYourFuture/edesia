const express = require("express");
const router = express.Router();
const db = require("../helpers/db");
const passport = require("passport");

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

router.get("/users/:user_id", (req, res) => {
  const userId = req.params.user_id;
  db.getUserProfile(userId).then(data => {
    res.send(data);
  });
});

router.post("/users", (req, res) => {
  const body = req.body;
  db.saveUser(
    body.name,
    body.email,
    body.city,
    body.password,
    body.postcode
  ).then(() => {
    res.send();
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
router.get("/admin/deliveries", async (req, res) => {
  const data = await db.getDeliveries();
  res.send(data);
});

router.post("/admin/deliveries", (req, res) => {
  const body = req.body;
  db.addDeliveries(
    body.address,
    body.deadline,
    body.status,
    body.store_name
  ).then(() => {
    res.send();
  });
});
router.get("/deliveries/:deliveryId", async (req, res) => {
  const delivery_id = req.params.deliveryId;
  const data = await db.filterDeliveryById(delivery_id);
  if (data) {
    res.send(data);
  } else {
    res.send(404);
  }
});

router.put(
  "/deliveries/:deliveryId/pickup",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    user_id = req.user.user_id;
    const delivery_id = req.params.deliveryId;
    db.assignDriverIdToDelivery(delivery_id, user_id).then(data => {
      res.send(data.status);
    });
  }
);

router.get("/stores_contacts", (req, res) => {
  db.getStoresContacts().then(data => {
    res.send(data);
  });
});

router.get("/items", (req, res) => {
  db.getItems().then(data => {});
});

router.get("/contacts", (req, res) => {
  db.getContacts().then(data => {
    res.send(data);
  });
});

router.put("/users/:user_id", async (req, res) => {
  const { body } = req;
  try {
    await db.editUserProfile(req.params.user_id, body);
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(502).json({ success: false });
  }
});

router.put("/deliveries/:delivery_id", async (req, res) => {
  const { body } = req;
  try {
    await db.editDeliveryDetails(req.params.delivery_id, body);
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(502).json({ success: false });
  }
}); 

router.delete("/deliveries/:delivery_id", async (req, res) => {
  const { body } = req;
  try {
    await db.deleteDelivery(req.params.delivery_id, body);
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(502).json({ success: false });
  }
});

module.exports = router;
