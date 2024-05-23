import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

function CartSummary() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const userState = useSelector((state) => state.user.currentUser);
  const [couponCode, setCouponCode] = useState("");
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const navigate = useNavigate();
  // console.log(userState);
  // if (!userState) {
  //   navigate("/login");
  //   // return;
  // }
  console.log(userState);

  useEffect(
    function () {
      if (!userState) {
        navigate("/login");
        // return;
      }
    },
    [userState, navigate]
  );

  // Calculate subtotal
  const subtotal = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleApplyCoupon = async (e) => {
    e.preventDefault();

    if (couponCode === "") {
      toast.error("Enter a valid coupon code");
      return;
    }

    try {
      const response = await fetch(`/api/coupons/${couponCode}`);
      const responseData = await response.json();

      if (!responseData || responseData.data.coupon.length === 0) {
        throw new Error("Invalid Coupon Code");
      }

      let discount = responseData.data.coupon[0].discountValue;
      if (responseData.data.coupon[0].discountType === "percentage") {
        discount = (subtotal * discount) / 100;
      }
      setTotalDiscount(discount);
      setIsCouponApplied(true);
    } catch (err) {
      toast.error(err.message);
      setCouponCode("");
    }
  };

  const handleClearCoupon = () => {
    setIsCouponApplied(false);
    setCouponCode("");
    setTotalDiscount(0);
  };

  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
  };

  const total = subtotal - totalDiscount;

  // Calculate delivery charge based on minimum order total
  const minimumOrderTotalForFreeDelivery = 300; // Example minimum order total for free delivery
  const deliveryCharge = total >= minimumOrderTotalForFreeDelivery ? 0 : 50; // Example delivery charge if the total is less than the minimum

  const handleStripePayment = async () => {
    try {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

      const response = await fetch("/api/orders/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          products: cartProducts,
          userId: userState.data.user._id,
        }),
      });

      const session = await response.json();
      console.log(session);
      console.log(stripe);
      const result = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (result.error) {
        console.log(result.error);
        throw new Error(result.error);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="w-full px-4 flex flex-col gap-6">
      <div className="flex flex-col gap-4 bg-white rounded-2xl items-start p-6">
        <h2 className="text-2xl font-bold">Coupon Code</h2>
        <div className="pt-0.5 w-full border-b bg-slate-100 rounded-lg" />
        <div className="flex items-center w-full">
          <input
            placeholder="Enter your Coupon Code"
            className="rounded-lg bg-gray-100 w-full px-4 py-3  focus:outline-blue-600"
            value={couponCode}
            onChange={handleCouponCodeChange}
            disabled={isCouponApplied}
          />
          {isCouponApplied && (
            <button
              className="text-red-500 ml-2 focus:outline-none"
              onClick={handleClearCoupon}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
        <button
          className="border-blue-600  border-[2.5px] p-4 rounded-lg text-lg font-semibold text-blue-600 w-full hover:text-white hover:border-white hover:bg-blue-600"
          onClick={handleApplyCoupon}
        >
          Apply your coupon
        </button>
      </div>

      <div className="flex flex-col gap-4 bg-white rounded-2xl items-start p-6 relative">
        {cartProducts.length === 0 && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-md rounded-2xl bg-gray-800 bg-opacity-60">
            <div className="flex flex-col items-center px-4">
              <p className="text-white text-3xl text-center font-semibold">
                Add a product to see the cart summary
              </p>
            </div>
          </div>
        )}
        <h2 className="text-2xl font-bold">Order Summary</h2>
        <div className="pt-0.5 w-full border-b bg-slate-100 rounded-lg" />

        <div className="flex flex-col w-full gap-1">
          <div className="flex justify-between items-center">
            <p className="text-lg  font-semibold text-slate-500">SubTotal</p>
            <p className="text-lg  font-semibold text-gray-800">
              {formatCurrency(subtotal)}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-lg  font-semibold text-slate-500">Discount</p>
            <p className="text-lg  font-semibold text-gray-800">
              {formatCurrency(totalDiscount)}
            </p>
          </div>

          <div className="w-full flex justify-between items-center">
            <p className="text-lg  font-semibold text-slate-500">
              Delivery Charge
            </p>
            <p className="text-lg  font-semibold text-gray-800">
              {formatCurrency(deliveryCharge)}
            </p>
          </div>

          <div className="w-full flex justify-between items-center">
            <p className="text-lg  font-semibold text-slate-500">Tax</p>
            <p className="text-lg  font-semibold text-gray-800">$0.00</p>
          </div>

          <div className="w-full flex justify-between items-center">
            <p className="text-lg  font-semibold text-slate-500 ">Total</p>
            <p className="text-3xl  font-bold text-gray-800">
              {formatCurrency(total + deliveryCharge)}
            </p>
          </div>
        </div>

        <button
          className="w-full bg-blue-500 px-2 py-3 text-xl font-semibold text-slate-50 hover:bg-blue-600 rounded-md"
          onClick={handleStripePayment}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}

export default CartSummary;
