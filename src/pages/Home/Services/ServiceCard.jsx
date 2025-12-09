import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service;

  return (
    <div
      className="
        card bg-base-100 shadow-md border rounded-xl 
        w-full max-w-sm mx-auto
        hover:shadow-xl transition-all duration-300
      "
    >
      <figure>
        <img
          src={img}
          alt={title}
          className="w-full h-56 object-cover rounded-t-xl"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg sm:text-xl font-semibold">{title}</h2>

        <p className="text-gray-700 font-medium">Price: ${price}</p>

        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}>
          <button className="btn  bg-green-500 hover:bg-amber-700">
            Details</button>
          </Link>
          
          <Link to={`/checkout/${_id}`}>
            <button
              className="
                btn  ml-2 bg-green-500 hover:bg-red-600
                transition-all duration-300
              "
            >
              Checkout
              
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
