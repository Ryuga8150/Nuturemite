const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const authRouter = require("./routes/authRoute");
const categoryRouter = require("./routes/categoryRoute");
const productRouter = require("./routes/productRoute");
const couponRouter = require("./routes/couponRoute");
const orderRouter = require("./routes/orderRoute");

const orderController = require("./controllers/orderController");

const globalErrorHandler = require("./controllers/errorController");

const app = express();
app.set("trust-proxy", true);

app.use(cors());
app.use(morgan("dev"));

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  orderController.webhook
);

app.use(express.json());
app.use(cookieParser());

// app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/products", productRouter);
app.use("/api/coupons", couponRouter);
app.use("/api/orders", orderRouter);

// app.use("/api/listing", listRouter);

// const pathNew = path.join(__dirname, "..", "/client/dist");
// console.log(__dirname, pathNew);
// app.use(express.static(path.join(__dirname, "..", "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

app.all("*", (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server`);
  err.status = "fail";
  err.statusCode = 404;

  next(err);
});

app.use(globalErrorHandler);
module.exports = app;
