import React from "react";
import "./HomeContainer.css";
import brand from "../../../assets/media/OpenBarLogo.png";
import { NavLink } from "react-router-dom";

const HomeContainer = () => {
  return (
    <div className="flex homeContainer">
      <img src={brand} alt="" className="homeBrand" />
      <h3>Disfruta de lo que mas te gusta</h3>
      <NavLink to={"/"}>
        <button className=" bg-amber-500 p-1 rounded-md font-semibold text-black w-48">
          Go to the store
        </button>
      </NavLink>
      <p className="text-gray-700">Made by Tomas Izuel - 2023</p>
    </div>
  );
};

export default HomeContainer;
