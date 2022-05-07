import React from "react";
import airbnb from "./images/airbnb.png";
import "../index.css";

export default function Navbar() {
  return (
    <nav>
      <img src={airbnb} alt="airbnb logo" />
    </nav>
  );
}
