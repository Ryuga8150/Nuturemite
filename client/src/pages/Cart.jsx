import React, { useState } from "react";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import { useSelector } from "react-redux";
const initialProducts = [
  {
    id: 1,
    name: "Product Name 1",
    code: "Product Code 1",
    price: 54.0,
    quantity: 1,
    image: "https://via.placeholder.com/64",
  },
  {
    id: 2,
    name: "Product Name 2",
    code: "Product Code 2",
    price: 54.0,
    quantity: 1,
    image: "https://via.placeholder.com/64",
  },
  {
    id: 3,
    name: "Product Name 3",
    code: "Product Code 3",
    price: 54.0,
    quantity: 1,
    image: "https://via.placeholder.com/64",
  },
  {
    id: 4,
    name: "Product Name 4",
    code: "Product Code 4",
    price: 54.0,
    quantity: 1,
    image: "https://via.placeholder.com/64",
  },
  {
    id: 4,
    name: "Product Name 4",
    code: "Product Code 4",
    price: 54.0,
    quantity: 1,
    image: "https://via.placeholder.com/64",
  },
  {
    id: 4,
    name: "Product Name 4",
    code: "Product Code 4",
    price: 54.0,
    quantity: 1,
    image: "https://via.placeholder.com/64",
  },
  {
    id: 4,
    name: "Product Name 4",
    code: "Product Code 4",
    price: 54.0,
    quantity: 1,
    image: "https://via.placeholder.com/64",
  },
];

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className="px-6 py-8 w-full">
      <span className="ml-8 text-lg font-semibold hover:underline">
        &larr; Go Back
      </span>
      <h1 className="text-center mb-6 text-6xl font-bold">My Cart</h1>
      <div className="grid bg-slate-100 py-8 grid-cols-[minmax(0,2fr),minmax(0,1fr)] w-full gap-6">
        <div className="w-full px-4">
          <div className="min-w-full overflow-y-auto max-h-[650px] bg-white p-4 rounded-lg">
            <div className="grid grid-cols-[minmax(0,1.2fr),repeat(3,minmax(0,1fr)),minmax(0,0.5fr)] gap-4 p-4 border-b font-semibold text-gray-600">
              <div>Product Details</div>
              <div className="text-center">Quantity</div>
              <div className="text-center">Price</div>
              <div className="text-center">Total</div>
            </div>
            {cart &&
              cart.cartProducts.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </div>
        </div>
        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
