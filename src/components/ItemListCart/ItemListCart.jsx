import ItemCardCart from "../ItemCardCart/ItemCardCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const ItemListCart = ({ products }) => {
  const { getTotal, setCartList, cartList } = useContext(CartContext);

  const puchaseProducts = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your puchase is complete",
      showConfirmButton: false,
      timer: 2000,
    });
    setCartList([]);
  };
  return (
    <section className="flex justify-center items-center pt-24 pb-36 flex-col gap-10">
      {cartList.length !== 0 ? (
        <>
          <h1 className=" self-center text-xl text-white">Your cart</h1>
          <div>
            <div className="flex justify-center items-center flex-wrap gap-5">
              {cartList.map((p) => (
                <ItemCardCart
                  name={p.product.name}
                  image={p.product.image}
                  cant={p.cant}
                  price={p.product.price}
                  id={p.product.id}
                  key={p.product.id}
                />
              ))}
            </div>
          </div>
          <div className="bg-white p-3 text-black rounded-md w-3/4 flex flex-col gap-2">
            <h2>Total: ${getTotal()}</h2>
            <button
              className=" bg-amber-500 p-1 rounded-md font-semibold"
              onClick={puchaseProducts}
            >
              Pay
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="pt-24 text-xl text-center px-4 text-bold">
            Oops, seems like don't have products in the cart!
          </h1>
          <NavLink to={"/"}>
            <button className=" bg-amber-500 p-1 rounded-md font-semibold text-black w-48">
              Go to the store
            </button>
          </NavLink>
        </>
      )}
    </section>
  );
};

export default ItemListCart;
