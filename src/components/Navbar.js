import React from "react";
import "../index.css";

export default function Navbar() {
  return (
    <nav>
      <img
        src={process.env.PUBLIC_URL + "/images/airbnb.png"}
        alt="airbnb logo"
        className="logo"
      />
    </nav>
  );
}
