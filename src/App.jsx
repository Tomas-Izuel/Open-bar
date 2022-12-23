import { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ItemListContainer 
          title='Tragos'
        />
      </main>
    </>
  );
}
