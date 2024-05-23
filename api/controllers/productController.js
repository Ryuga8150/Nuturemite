const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");

exports.getProducts = catchAsync(async (req, res) => {
  const products = await Product.find().populate("categories", "name");
  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});

exports.getProduct = catchAsync(async (req, res) => {
  const product = await Product.findById(req.params.id).populate(
    "categories",
    "name"
  );

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.createProduct = catchAsync(async (req, res) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.deleteProduct = catchAsync(async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "success",
  });
});
