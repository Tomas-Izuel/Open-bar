import React from "react";
import { Link } from "react-router-dom";

function ItemCard(props) {
  return (
    <Link to={`/detail/${props.id}`}>
      <div className="flex justify-center w-40 h-40">
        <div className="rounded-lg shadow-lg bg-white">
          <img className="rounded-t-lg h-28 w-40" src={props.image} alt="" />
          <div className="flex justify-between p-2">
            <h5 className="text-gray-900 text-md font-medium mb-2">{props.name}</h5>
            <p className="text-gray-700 text-base mb-4">${props.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
