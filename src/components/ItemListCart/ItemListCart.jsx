import ItemCardCart from "../ItemCardCart/ItemCardCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const ItemListCart = ({ products }) => {
  const { getTotal, setCartList, cartList } = useContext(CartContext);

  const puchaseProducts = async () => {
    const { value: desk } = await Swal.fire({
      title: "Enter your desk number",
      input: "number",
      inputLabel: "Your desk number",
      inputPlaceholder: "Enter your desk number",
    });
    if (desk) {
      const date = new Date();
      const order = {
        desk: desk,
        total: getTotal(),
        date: date.toLocaleString(),
        isActive: true,
        items: cartList.map(({ id, name, price, cant }) => ({
          id,
          name,
          price,
          cant,
        })),
      };
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your puchase is complete",
        showConfirmButton: false,
        timer: 2000,
      });

      const db = getFirestore();

      const queryCollection = collection(db, "orders");
      addDoc(queryCollection, order)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => alert(err));
      sessionStorage.setItem("order", order);
      setCartList([]);
    }
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
                  name={p.name}
                  image={p.image}
                  cant={p.cant}
                  price={p.price}
                  id={p.id}
                  key={Math.random() * 1000000000}
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
      ) : sessionStorage.getItem("order") ? (
        <>
          <h1 className="pt-24 text-xl text-center px-4 text-bold">
            You have a order in progress, but you can do another order
          </h1>
          <NavLink to={"/"}>
            <button className=" bg-amber-500 p-1 rounded-md font-semibold text-black w-48">
              Go to the store
            </button>
          </NavLink>
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
