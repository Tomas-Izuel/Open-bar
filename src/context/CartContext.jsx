import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCartContext = (p) => {
    let flag = false;
    cartList.forEach((prod) => {
      if (prod.id === p.id) {
        prod.cant += p.cant;
        flag = true;
      }
    });
    if (!flag) {
      setCartList([...cartList, p]);
    } else {
      setCartList([...cartList]);
    }
  };
  const cantProducts = () => {
    let counter = 0;
    cartList.forEach((prod) => {
      counter += prod.cant;
    });
    return counter;
  };
  const getTotal = () => {
    let total = 0;
    cartList.forEach((prod) => {
      total += prod.price * prod.cant;
    });
    return total;
  };
  const deleteProduct = (id) => {
    const newCart = [];
    cartList.forEach((prod) => {
      if (prod.id !== id) {
        newCart.push(prod);
      }
    });
    setCartList([...newCart]);
  };
  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
        addToCartContext,
        cantProducts,
        getTotal,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
