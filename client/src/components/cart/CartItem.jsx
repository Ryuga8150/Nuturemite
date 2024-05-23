import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateItemQuantity } from "../../redux/cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";

CartItem.propTypes = {
  product: PropTypes.object,
  // onIncrease: PropTypes.func,
  // onDecrease: PropTypes.func,
};

function CartItem({ product }) {
  const dispatch = useDispatch();
  console.log(product);

  const handleIncrease = () => {
    dispatch(
      updateItemQuantity({ id: product._id, quantity: product.quantity + 1 })
    );
  };

  const handleDecrease = () => {
    if (product.quantity > 1) {
      dispatch(
        updateItemQuantity({ id: product._id, quantity: product.quantity - 1 })
      );
    }
  };

  const handleRemove = () => {
    dispatch(removeItem({ id: product._id }));
  };

  return (
    <div className="grid grid-cols-[minmax(0,1.2fr),repeat(3,minmax(0,1fr)),minmax(0,0.5fr)] items-center gap-4 border-b py-4">
      <div className="flex items-center space-x-4">
        <img
          src={product.imageCover}
          alt={product.name}
          className="w-16 h-16 object-cover"
        />
        <div>
          <h2 className="font-medium">{product.name}</h2>
          <p className="text-gray-500">{product.vendor}</p>
        </div>
      </div>
      <div className="flex items-center justify-center border  mx-auto rounded-md">
        <button onClick={handleDecrease} className="px-2 py-1 text-gray-600">
          -
        </button>
        <input
          type="text"
          className="w-12 text-center border-l border-r"
          value={product.quantity}
          readOnly
        />
        <button onClick={handleIncrease} className="px-2 py-1 text-gray-600">
          +
        </button>
      </div>
      <div className="flex flex-col items-center">
        <p className="w-20 block text-center">
          {product.discountPrice
            ? formatCurrency(product.discountPrice)
            : formatCurrency(product.price)}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="w-20 block text-center">
          {product.discountPrice
            ? formatCurrency(product.discountPrice * product.quantity)
            : formatCurrency(product.price * product.quantity)}
        </p>
      </div>
      <button className="text-red-500 text-lg font-bold" onClick={handleRemove}>
        ×
      </button>
    </div>
  );
}

export default CartItem;
