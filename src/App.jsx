import { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";
import logo from './assets/media/Logo.png'

export default function App() {
  return (
    <>
      <header>
        <a href="" className="flex justify-start items-center gap-4">
          <img src={logo} alt="" className="brand"/>
        </a>
      </header>
      <main></main>
      <footer>
        <Navbar />
      </footer>
    </>
  );
}
