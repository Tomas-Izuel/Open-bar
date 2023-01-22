import React, { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ItemDetail = ({ product }) => {
  const [counter, setCounter] = useState(1);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    setCounter((count) => count - 1);
  };
  const addToCart = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Products added successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <section className="w-screen h-screen flex justify-start items-center py-24 pb-20 flex-col gap-10">
      <div className="flex justify-center w-3/4">
        <div className="rounded-lg shadow-lg bg-white">
          <img className="rounded-t-lg w-full" src={product.image} alt="" />
          <div className="p-5">
            <h5 className="text-gray-900 text-3xl font-medium mb-2">
              {product.name}
            </h5>
            <p className="text-gray-800">{product.description}</p>
            <p className="text-gray-700 text-xl mb-4 pt-4">${product.price}</p>
            <div className="flex gap-3 pb-4">
              <button className=" border border-slate-800 p-2 w-1/3 text-gray-800 rounded">Suave</button>
              <button className=" border border-slate-800 p-2 w-1/3 text-gray-800 rounded">Media</button>
              <button className=" border border-slate-800 p-2 w-1/3 text-gray-800 rounded">Amarga</button>
            </div>
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
              <button className=" bg-yellow-400 text-gray-900 w-full p-1 rounded-lg" onClick={addToCart}>
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
