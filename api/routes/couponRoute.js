const express = require("express");
const couponController = require("../controllers/couponController");
const { verifyToken } = require("../utils/verifyUser");

const router = express.Router();

router.route("/").get(couponController.getCoupons);
router.route("/:coupon").get(couponController.getCoupon);
router.route("/").post(couponController.createCoupon);

router.route("/:id").delete(couponController.deleteCoupon);

module.exports = router;
