import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemByCategory, getItems } from "../../../services/firebase";
import ItemList from "../../ItemList/ItemList";
import Loader from "../../Loader/Loader";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { productsId } = useParams();

  useEffect(() => {
    if (productsId) {
      // getItems().then((response) => {
      //   setProducts(
      //     response.filter((product) => product.category === productsId)
      //   );
      // });
      getItemByCategory(productsId).then((response) => {
        setProducts(response);
      });
    } else {
      getItems().then((response) => setProducts(response));
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
