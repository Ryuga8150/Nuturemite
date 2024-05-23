const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, "A Coupon must have a code"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "A Coupon must have a description"],
  },
  discountType: {
    type: String,
    enum: ["percentage", "fixedAmount"],
    required: [true, "A Coupon must specify its discount type"],
  },
  discountValue: {
    type: Number,
    required: [true, "A Coupon must have a discount Value"],
  },
  minOrderAmount: {
    type: Number,
    required: [true, "A Coupon must have a minimum order amount"],
  },
  maxUsageCount: {
    type: Number,
    default: null, // optional field
  },
  startDate: {
    type: Date,
    required: [true, "A Coupon must have a start date"],
  },
  endDate: {
    type: Date,
    required: [true, "A Coupon must have an end date"],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;

// Coupons

// [
//   {
//     code: "SAVE10",
//     description: "Get 10% off on all orders",
//     discountType: "percentage",
//     discountValue: 10,
//     minOrderAmount: 50,
//     maxUsageCount: 100,
//     startDate: "2024-06-01T00:00:00Z",
//     endDate: "2024-06-30T23:59:59Z",
//     isActive: true,
//   },
//   {
//     code: "FREESHIP",
//     description: "Free shipping on orders above $100",
//     discountType: "fixedAmount",
//     discountValue: 0,
//     minOrderAmount: 100,
//     startDate: "2024-06-01T00:00:00Z",
//     endDate: "2024-06-30T23:59:59Z",
//     isActive: true,
//   },
//   {
//     code: "SUMMER20",
//     description: "Get $20 off on orders above $150",
//     discountType: "fixedAmount",
//     discountValue: 20,
//     minOrderAmount: 150,
//     startDate: "2024-06-15T00:00:00Z",
//     endDate: "2024-08-31T23:59:59Z",
//     isActive: true,
//   },
//   {
//     code: "EXPIRED",
//     description: "Expired coupon",
//     discountType: "percentage",
//     discountValue: 15,
//     minOrderAmount: 50,
//     maxUsageCount: 50,
//     startDate: "2024-01-01T00:00:00Z",
//     endDate: "2024-05-31T23:59:59Z",
//     isActive: false,
//   },
//   {
//     code: "SALE25",
//     description: "Get $25 off on your purchase",
//     discountType: "fixedAmount",
//     discountValue: 25,
//     minOrderAmount: 75,
//     startDate: "2024-09-01T00:00:00Z",
//     endDate: "2024-09-30T23:59:59Z",
//     isActive: true,
//   },
//   {
//     code: "WELCOME50",
//     description: "Welcome discount: $50 off on your first order",
//     discountType: "fixedAmount",
//     discountValue: 50,
//     minOrderAmount: 100,
//     startDate: "2024-07-01T00:00:00Z",
//     endDate: "2024-12-31T23:59:59Z",
//     isActive: true,
//   },
// ];
