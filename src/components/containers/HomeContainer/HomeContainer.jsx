import React from "react";
import "./HomeContainer.css";
import brand from "../../../assets/media/OpenBarLogo.png";
import Swal from "sweetalert2";

const HomeContainer = () => {
  Swal.fire("The Internet?", "That thing is still around?", "question");

  return (
    <div className="flex homeContainer">
      <img src={brand} alt="" className="homeBrand" />
      <h3>Disfruta de lo que mas te gusta</h3>
      <p className="text-gray-700">Maded by Tomas Izuel - 2023</p>
    </div>
  );
};

export default HomeContainer;
