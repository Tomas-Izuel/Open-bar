import React from "react";
import "./itemCard.css";

function ItemCard(props) {
  return (
    <div className="itemCard">
      <img src={props.image} alt="" className="imageItem" />
      <div className="itemText">
        <h3 className="nameItem">{props.name}</h3>
        <p className="priceItem">${props.price}</p>
      </div>
    </div>
  );
}

export default ItemCard;
