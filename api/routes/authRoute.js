const express = require("express");
const authController = require("../controllers/authController");
const { verifyToken } = require("../utils/verifyUser");

const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/signin").post(authController.signin);
router.route("/signout").get(authController.logout);

module.exports = router;
