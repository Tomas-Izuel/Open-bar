import React from "react";
import "./navbar.css";
import BeerWidget from "../BeerWidget/BeerWidget";
import CartWidget from "../CartWidget/CartWidget";
import DrinksWidget from "../DrinksWidget/DrinksWidget";
import FoodWidget from "../FoodWidget/FoodWidget";
import PromoWidget from "../PromoWidget/PromoWidget";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="flex justify-between items-center">
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "selected" : "")}
            to="/products/beers"
          >
            <BeerWidget />
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "selected" : "")}
            to="/products/drinks"
          >
            <DrinksWidget />
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/cart">
            <CartWidget />
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "selected" : "")}
            to="/products/foods"
          >
            <FoodWidget />
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "selected" : "")}
            to="/products/coffes"
          >
            <PromoWidget />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
