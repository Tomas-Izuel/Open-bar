import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetail = ({ product }) => {
  const { addToCartContext } = useContext(CartContext);
  const [counter, setCounter] = useState(1);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = (e) => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
  };
  const addToCart = () => {
    addToCartContext({ product, cant: counter });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Products added successfully",
      showConfirmButton: false,
      timer: 1000,
    });
  };
  return (
    <section className="flex justify-start items-center pt-24 pb-36 flex-col gap-10">
      <div className="flex justify-center w-3/4">
        <div className="rounded-lg shadow-lg bg-white">
          <img className="rounded-t-lg w-full" src={product.image} alt="" />
          <div className="p-5">
            <h5 className="text-gray-900 text-3xl font-medium mb-2">
              {product.name}
            </h5>
            <p className="text-gray-800">{product.description}</p>
            <p className="text-gray-700 text-xl mb-4 pt-4">${product.price}</p>

            <div className="flex w-full justify-center items-center flex-col gap-3">
              <div className="w-full flex justify-center">
                <button
                  className=" w-1/3 h-8 bg-slate-800 rounded-l-lg"
                  onClick={increase}
                >
                  +
                </button>
                <span className="shadow-inner w-1/3 h-8 border-1 text-black flex justify-center items-center">
                  {counter}
                </span>
                <button
                  className=" w-1/3 h-8 bg-slate-800 rounded-r-lg"
                  onClick={decrease}
                >
                  -
                </button>
              </div>
              <button
                className=" bg-yellow-400 text-gray-900 w-full p-1 rounded-lg"
                onClick={addToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
