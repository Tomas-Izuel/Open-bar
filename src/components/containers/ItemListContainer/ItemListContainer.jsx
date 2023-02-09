import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemByCategory, getItems } from "../../../services/firebase";
import ItemList from "../../ItemList/ItemList";
import Loader from "../../Loader/Loader";
import Swal from "sweetalert2";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { productsId } = useParams();

  const setDeskNumber = () => {
    try {
      const length = sessionStorage.getItem("desk").length;
    } catch {
      const { value: desk } = Swal.fire({
        title: "Input desk code",
        input: "text",
        inputLabel: "The code is in your desk",
        text: "If you are testing, insert random code or one of the README codes",
        inputPlaceholder: "XFcr321",
      }).then((desk) => {
        if (desk.value === undefined) {
          setDeskNumber();
        } else {
          sessionStorage.setItem("desk", JSON.stringify(desk.value));
        }
      });
    }
  };

  setDeskNumber();

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
