import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";
import Loader from "../../Loader/Loader";

const ItemDetailContainer = () => {
  const path = "../../../storage/storage.json";
  const [product, setProduct] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    fetch(path)
      .then((response) => response.json())
      .then((objects) => {
        setProduct(objects.find((prod) => prod.id === parseInt(detailId)));
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <>{product !== undefined ? <ItemDetail product={product} /> : <Loader />}</>
  );
};

export default ItemDetailContainer;
