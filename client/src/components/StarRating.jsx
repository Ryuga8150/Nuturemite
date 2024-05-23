import React from "react";
import PropTypes from "prop-types";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

StarRating.propTypes = {
  rating: PropTypes.number,
};

function StarRating({ rating }) {
  const maxRating = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Create an array of length maxRating
  const stars = Array.from({ length: maxRating }, (_, index) => {
    // Determine if the star should be filled, half-filled, or empty
    let filled = index < filledStars;
    let halfFilled = hasHalfStar && index === filledStars;

    return halfFilled ? (
      <FaStarHalf
        key={index}
        className="w-6 h-6 text-yellow-600 fill-current"
      />
    ) : filled ? (
      <FaStar key={index} className="w-6 h-6 text-yellow-600 fill-current " />
    ) : (
      <FaRegStar key={index} className="w-6 h-6 text-gray-300 fill-current" />
    );
  });

  return <div className="flex mb-1">{stars}</div>;
}

export default StarRating;
