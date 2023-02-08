import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";
import Loader from "../../Loader/Loader";
import { getItemById } from "../../../services/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { detailId } = useParams();

  useEffect(() => {
    getItemById(detailId).then((product) => {
      setIsLoading(false);
      setProduct(product);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : product.name !== undefined ? (
        <>
          <ItemDetail product={product} />
        </>
      ) : (
        <>
          <h1 className=" pt-36 text-xl text-center">
            No se encontro el producto solicitado
          </h1>
        </>
      )}
    </>
  );
};

export default ItemDetailContainer;
