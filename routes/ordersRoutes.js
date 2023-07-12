const express = require("express");
const router = express.Router();

const ordersController = require("../controllers/ordersControllers");

// orders routes
router.post("/neworder", ordersController.createOrder);

module.exports = router;