import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";
import Loader from "../../Loader/Loader";
import { getItemById } from "../../../services/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    // fetch(path)
    //   .then((response) => response.json())
    //   .then((objects) => {
    //     setProduct(objects.find((prod) => prod.id === parseInt(detailId)));
    //   })
    getItemById(detailId).then((product) => {
      setProduct(product);
    });
  }, []);

  return (
    <>{product !== undefined ? <ItemDetail product={product} /> : <Loader />}</>
  );
};

export default ItemDetailContainer;
