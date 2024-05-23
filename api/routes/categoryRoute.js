const express = require("express");
const categoryController = require("../controllers/categoryController");
const { verifyToken } = require("../utils/verifyUser");

const router = express.Router();

router.route("/").get(categoryController.getCategories);
router.route("/").post(categoryController.createCategory);
router.route("/:id").get(categoryController.getCategory);
router.route("/:id").delete(categoryController.deleteCategory);

module.exports = router;
