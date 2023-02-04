import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../ItemList/ItemList";
import Loader from "../../Loader/Loader";

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
      {products.length === 0 ? (
        <Loader />
      ) : (
        <ItemList products={products} productsId={productsId} />
      )}
    </>
  );
};

export default ItemListContainer;
