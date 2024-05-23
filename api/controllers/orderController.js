const stripeFunc = require("stripe");
const Order = require("../models/orderModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllOrders = catchAsync(async (req, res) => {
  const orders = await Order.find().populate("products");

  res.status(200).json({
    status: "success",
    data: {
      orders,
    },
  });
});

exports.getUserOrders = catchAsync(async (req, res) => {
  console.log(process.env.STRIPE_SECRET_KEY);
  const id = req.params.id;

  const orders = await Order.find({ user: id }).populate("products");

  res.status(200).json({
    status: "success",
    data: {
      orders,
    },
  });
});

exports.createCheckoutSession = async (req, res) => {
  const stripe = stripeFunc(process.env.STRIPE_SECRET_KEY);
  console.log(req.body);
  const { products, userId } = req.body;

  const line_items = products.map((product) => ({
    price_data: {
      currency: "USD",
      product_data: {
        name: product.name,
        images: [product.imageCover],
        metadata: {
          description: product.description,
        },
      },
      unit_amount_decimal:
        (product.discountPrice ? product.discountPrice : product.price) * 100,
    },
    quantity: product.quantity,
  }));
  let metadata = {};
  products.map((product) => {
    metadata[product._id] = JSON.stringify({
      id: product._id,
      quantity: product.quantity,
    });
  });

  metadata.userId = userId;

  console.log(metadata);

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: "http://localhost:5173/payment-success",
    cancel_url: "http://localhost:5173/payment-failure",
    metadata,
  });

  // console.log(session);

  res.status(200).json({
    status: "success",
    sessionId: session.id,
  });
};

exports.webhook = (request, response) => {
  const stripe = stripeFunc(process.env.STRIPE_SECRET_KEY);
  const sig = request.headers["stripe-signature"];

  let event;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  switch (event.type) {
    case "checkout.session.completed":
      const checkoutSessionCompleted = event.data.object;
      console.log(checkoutSessionCompleted);
      // Then define and call a function to handle the event checkout.session.completed
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
};
