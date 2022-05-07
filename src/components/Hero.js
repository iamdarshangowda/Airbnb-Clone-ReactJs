import React from "react";
import "../index.css";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src={process.env.PUBLIC_URL + "/images/group.png"}
        alt="group of people"
        className="hero-photo"
      />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-para">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
