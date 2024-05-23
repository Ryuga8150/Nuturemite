const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Product must have a name"],
  },
  imageCover: {
    type: String,
    required: [true, "A Product must have a cover image"],
  },
  images: [String],
  description: {
    type: String,
    required: [true, "A Product must have a description"],
  },
  categories: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    validate: {
      validator: function (categories) {
        return categories.length > 0;
      },
      message: "At least one category is required",
    },
    required: true,
  },
  price: {
    type: Number,
    required: [true, "A Product must have a price"],
  },
  discountPrice: {
    type: Number,
    validate: {
      validator: function (val) {
        // this only points to current doc on NEW document creation
        return val < this.price;
      },
      message: "Discount price ({VALUE}) should be below regular price",
    },
    default: 0,
  },
  weight: {
    type: Number,
    required: true,
  },
  dimensions: {
    type: {
      width: Number,
      height: Number,
      depth: Number,
    },
    required: true,
  },
  storeName: {
    type: String,
    required: true,
  },
  vendor: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
