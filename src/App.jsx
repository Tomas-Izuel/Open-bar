import { Children, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";

import "./App.css";
import ItemListContainer from "./components/containers/ItemListContainer/ItemListContainer";
import HomeContainer from "./components/containers/HomeContainer/HomeContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/containers/CartContainer/CartContainer";
import Header from "./components/Header/Header";
import { CartContextProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<HomeContainer />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/products/:productsId" element={<ItemListContainer />} />
          <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<HomeContainer />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </CartContextProvider>
  );
}
