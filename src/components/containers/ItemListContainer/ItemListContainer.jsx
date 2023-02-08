import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemByCategory, getItems } from "../../../services/firebase";
import ItemList from "../../ItemList/ItemList";
import Loader from "../../Loader/Loader";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { productsId } = useParams();

  useEffect(() => {
    if (productsId) {
      getItemByCategory(productsId).then((response) => {
        setIsLoading(false);
        setProducts(response);
      });
    } else {
      getItems().then((response) => {
        setIsLoading(false);
        setProducts(response);
      });
    }
  }, [productsId]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : products.length === 0 ? (
        <>
          <h1 className=" pt-36 text-xl text-center">
            No se encuentran productos para esta categoria
          </h1>
        </>
      ) : (
        <>
          <ItemList products={products} productsId={productsId} />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
