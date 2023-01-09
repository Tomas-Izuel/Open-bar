import { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";
import logo from './assets/media/Logo.png'
import TopItemsContainer from "./components/TopItemsContainer/TopItemsContainer";

export default function App() {
  return (
    <>
      <header>
        <a href="" className="flex justify-start items-center gap-4">
          <img src={logo} alt="" className="brand"/>
        </a>
      </header>
      <main>
        <TopItemsContainer 
          route="topBeers"
          section="beers"
        />
      </main>
      <footer>
        <Navbar />
      </footer>
    </>
  );
}
