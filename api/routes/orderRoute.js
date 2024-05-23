const express = require("express");
const orderController = require("../controllers/orderController");
const { verifyToken } = require("../utils/verifyUser");

const router = express.Router();

router
  .route("/create-checkout-session")
  .post(orderController.createCheckoutSession);

router.route("/:id").get(orderController.getUserOrders);
router.route("/").get(orderController.getAllOrders);

module.exports = router;
