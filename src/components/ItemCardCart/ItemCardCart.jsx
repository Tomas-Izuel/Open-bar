import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ItemCardCart(props) {
  const { deleteProduct } = useContext(CartContext);
  return (
    <div className="flex justify-center w-full px-10">
      <button
        className="absolute right-11 translate-y-1 bg-red-600 w-5 h-5 rounded-full flex justify-center items-center"
        onClick={() => deleteProduct(props.id)}
      >
        X
      </button>
      <div className="rounded-lg shadow-lg bg-white flex">
        <img className="rounded-l-lg w-2/4" src={props.image} alt="" />
        <div className="flex flex-col p-2">
          <h5 className="text-gray-900 text-md font-semibold mb-2">
            {props.name}
          </h5>
          <p className="text-gray-700 text-base">Price: ${props.price}</p>
          <p className="text-gray-700 text-base">Cant: {props.cant}</p>
          <p className="text-gray-700 text-base mb-4">
            Subtotal: ${props.cant * props.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemCardCart;
