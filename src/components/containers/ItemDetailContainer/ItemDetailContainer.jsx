import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const path = "../../../storage/storage.json";
  const [product, setProduct] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    fetch(path)
      .then((response) => response.json())
      .then((objects) => {
        setProduct(objects.find((prod) => prod.id === parseInt(detailId)));
      });
  }, []);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;
