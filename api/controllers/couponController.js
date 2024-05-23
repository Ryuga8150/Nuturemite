const Coupon = require("../models/couponModel");
const catchAsync = require("../utils/catchAsync");

exports.getCoupons = catchAsync(async (req, res) => {
  const coupons = await Coupon.find();
  res.status(200).json({
    status: "success",
    results: coupons.length,
    data: {
      coupons,
    },
  });
});

exports.getCoupon = catchAsync(async (req, res) => {
  const coupon = await Coupon.find({ code: req.params.coupon });

  res.status(200).json({
    status: "success",
    data: {
      coupon,
    },
  });
});

exports.createCoupon = catchAsync(async (req, res) => {
  const coupon = await Coupon.create(req.body);

  res.status(200).json({
    status: "success",
    data: {
      coupon,
    },
  });
});

exports.deleteCoupon = catchAsync(async (req, res) => {
  await Coupon.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "success",
  });
});
