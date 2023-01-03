import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const getTopItems = (route) => {
  fetch(route)
    .then((response) => response.json())
    .then((json) => {
      return json
    });
};

function TopItemsContainer(props) {
  const route = "../../../storage/" + props.route + ".json";
  return <section>
  </section>;
}

TopItemsContainer.propTypes = {};

export default TopItemsContainer;
