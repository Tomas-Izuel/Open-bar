import ItemListCart from "../../ItemListCart/ItemListCart";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getOrdersDesk } from "../../../services/firebase";
import OrderCard from "../../OrderCard/OrderCard";

const CartContainer = () => {
  const { getTotal, setCartList, cartList } = useContext(CartContext);
  const [orders, setOrders] = useState([]);

  const puchaseProducts = async () => {
    const { value: email } = await Swal.fire({
      title: "Enter your email",
      input: "email",
      inputLabel: "We will sent the ticket to this email",
      inputPlaceholder: "Example@example.com",
    });
    if (email) {
      const date = new Date();
      const order = {
        email: email,
        desk: sessionStorage.getItem("desk"),
        client: sessionStorage.getItem("client"),
        total: getTotal(),
        date: date.toLocaleString(),
        status: "in progress",
        items: cartList.map(({ id, name, price, cant }) => ({
          id,
          name,
          price,
          cant,
        })),
      };
      const db = getFirestore();

      const queryCollection = collection(db, "orders");
      addDoc(queryCollection, order)
        .then((resp) => {
          const orderId = resp.id;
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Your puchase is complete`,
            text: `Your puchase id is ${orderId}`,
            showConfirmButton: true,
          });
        })
        .catch((err) => alert(err));
      setCartList([]);
    }
  };

  useEffect(() => {
    getOrdersDesk(
      sessionStorage.getItem("desk"),
      sessionStorage.getItem("client")
    ).then((response) => setOrders(response));
  }, [cartList]);

  const cleanCart = () => {
    setCartList([]);
  };
  return (
    <section className="flex justify-center items-center pt-24 pb-36 flex-col gap-10">
      {cartList.length !== 0 ? (
        <>
          <h1 className=" self-center text-xl text-white">Your cart</h1>
          <ItemListCart cartList={cartList} />
          <div className="bg-white p-3 text-black rounded-md w-3/4 flex flex-col gap-2">
            <h2>Total: ${getTotal()}</h2>
            <button
              className=" bg-amber-400 p-1 rounded-md font-semibold"
              onClick={puchaseProducts}
            >
              Pay
            </button>
            <button
              className=" bg-amber-300 p-1 rounded-md font-normal"
              onClick={cleanCart}
            >
              Clean cart
            </button>
          </div>
        </>
      ) : orders.length !== 0 ? (
        <>
          <h1 className="pt-24 text-xl text-center px-4 text-bold">
            You have orders in progress, but you can do another order
          </h1>
          <div className=" flex flex-col gap-5">
            {orders.map((order) => (
              <OrderCard
                id={order.id}
                time={order.time}
                status={order.status}
                key={order.id}
              />
            ))}
          </div>
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

export default CartContainer;
