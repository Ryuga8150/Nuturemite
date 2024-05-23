import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cart/cartSlice";

const StripeSuccessPage = () => {
  const dispatch = useDispatch();

  // Clear cart when the component mounts
  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center py-24 px-12 bg-gray-100">
      <h1 className="text-3xl font-semibold text-green-600 mb-4">
        Payment Successful!
      </h1>
      <p className="text-lg text-gray-800 mb-8">
        Thank you for your purchase. Your transaction was successful.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4">
        Continue Shopping
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
        View Order in My Orders
      </button>
    </div>
  );
};

export default StripeSuccessPage;
