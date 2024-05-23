const express = require("express");
const productController = require("../controllers/productController");
const { verifyToken } = require("../utils/verifyUser");

const router = express.Router();

router.route("/").get(productController.getProducts);
router.route("/:id").get(productController.getProduct);

router.route("/").post(productController.createProduct);

router.route("/:id").delete(productController.deleteProduct);

module.exports = router;
