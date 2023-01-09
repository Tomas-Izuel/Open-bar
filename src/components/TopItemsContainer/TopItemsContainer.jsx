import React from "react";
import { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import './topItemContainer.css'

function TopItemsContainer(props) {
  const route = "../../../storage/" + props.route + ".json";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(route)
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
      });
  });

  return (
    <section className="topItems">
      <h1>Our top {props.section}</h1>
      <div className="cardGallery">
        {products.map((product) => (
          <ItemCard 
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default TopItemsContainer;
