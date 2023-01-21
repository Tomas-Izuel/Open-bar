import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../ItemList/ItemList";

const ItemListContainer = () => {
  const path = "../../../storage/storage.json";
  const [products, setProducts] = useState([]);
  const { productsId } = useParams();

  useEffect(() => {
    if (productsId) {
      fetch(path)
        .then((response) => response.json())
        .then((json) => {
          setProducts(
            json.filter((product) => product.category === productsId)
          );
        });
    } else {
      fetch(path)
        .then((response) => response.json())
        .then((json) => {
          setProducts(json);
        });
    }
  }, [productsId]);
  return (
    <>
      <ItemList 
        products={products}
        productsId={productsId}
      />
    </>
  );
};

export default ItemListContainer;
