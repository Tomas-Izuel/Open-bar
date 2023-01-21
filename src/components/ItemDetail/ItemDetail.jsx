import React, { useState } from "react";

const ItemDetail = ({ product }) => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    setCounter((count) => count - 1);
  };
  return (
    <section className="w-screen h-screen flex justify-start items-center pt-24 flex-col gap-10">
      <h1 className="text-xl">Product detail</h1>
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
              <div className="flex justify-center">
                <button
                  className=" w-12 h-8 bg-slate-800 rounded-l-lg"
                  onClick={increase}
                >
                  +
                </button>
                <span className="shadow-inner w-12 h-8 border-1 text-black flex justify-center items-center">
                  {counter}
                </span>
                <button
                  className=" w-12 h-8 bg-slate-800 rounded-r-lg"
                  onClick={decrease}
                >
                  -
                </button>
              </div>
              <button className="bg-slate-800 w-3/4 p-1 rounded-lg">
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
