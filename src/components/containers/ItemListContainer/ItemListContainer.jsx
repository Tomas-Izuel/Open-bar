import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemByCategory, getItems } from "../../../services/firebase";
import ItemList from "../../ItemList/ItemList";
import Loader from "../../Loader/Loader";
import Swal from "sweetalert2";

const ItemListContainer = () => {
  const desks = ["tomy1", "tomy2", "tomy3", "tomy4"];

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { productsId } = useParams();

  const setDeskNumber = () => {
    try {
      const length = sessionStorage.getItem("desk").length;
    } catch {
      const { value: formValues } = Swal.fire({
        title: "Welcome!, complete the form to process your orders",
        html:
          "<label>Insert desk code</label>" +
          '<input id="swal-input1" class="swal2-input">' +
          "<label>Insert your name as client</label>" +
          '<input id="swal-input2" class="swal2-input">' +
          "<p>If you are testing, check the desk codes in GitHub README.</p>",
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
          ];
        },
      }).then((formValues) => {
        if (
          formValues.value[0] === undefined ||
          formValues.value[1] === undefined
        ) {
          setDeskNumber();
        } else {
          if (desks.includes(formValues.value[0])) {
            sessionStorage.setItem("desk", JSON.stringify(formValues.value[0]));
            sessionStorage.setItem(
              "client",
              JSON.stringify(formValues.value[1])
            );
          } else {
            setDeskNumber();
          }
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
