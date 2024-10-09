import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";

const Star = ({ filled }) => (
  <StarIcon
    className={`h-5 w-5 ${
      filled ? "text-yellow-400 fill-current" : "text-yellow-400"
    }`}
  />
);

const ProductRatings = ({ avgRating, ratings }) => {
  const filledStars = Math.round(avgRating);

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <Star key={index} filled={index < filledStars} />
      ))}
      <span className="ml-3 text-blue-500">{ratings} ratings</span>
    </div>
  );
};

export default ProductRatings;
