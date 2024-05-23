import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StarRating from "../StarRating";
import { addItem } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

ProductCard.propTypes = {
  product: PropTypes.object,
};

function ProductCard({ product }) {
  const dispatch = useDispatch();

  function handleAddItem() {
    dispatch(addItem({ ...product, quantity: 1 }));
    toast.success("Item Added To CART");
  }

  return (
    <div className="p-2.5 max-w-80 rounded-md bg-slate-5 flex-1">
      <Link to={`/shop/${product._id}`}>
        <div className="p-4 bg-gray-100 rounded-md ">
          <img
            className="w-64 h-64 object-cover"
            src={product.imageCover}
            alt={"Product"}
          />
        </div>

        <div className="flex flex-col gap-1.5 items-center px-2 pt-4 pb-2">
          <span className="text-sm font-medium text-center">
            {product.categories.map((obj) => obj.name).join(", ")}
          </span>
          <h2 className="text-xl font-semibold text-center">{product.name}</h2>

          <StarRating rating={product.rating} />

          <div className="flex gap-1 items-center mb-2">
            <span className="text-md line-through block">${product.price}</span>
            <span className="text-xl font-semibold block">
              ${product.discountPrice}
            </span>
          </div>
        </div>
      </Link>
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md"
        onClick={handleAddItem}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
