import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
//rafc

export const ServiceCard = ({service}) => {
    const {title, img, price, _id} = service;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> {title} </h2>
    <p> Price : {price} </p>
    <div className="card-actions justify-end">
    <Link to={`/checkout/${_id}`}> 
       <button className="btn btn-square hover:bg-green-600">

      <FaArrowRight />
</button>
    </Link>
    </div>
  </div>
</div>
  )
}
