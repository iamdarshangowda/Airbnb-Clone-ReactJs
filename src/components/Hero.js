import React from "react";
import group from "./images/group.png";
import "../index.css";

export default function Hero() {
  return (
    <section className="hero">
      <img src={group} alt="group of people" className="hero-photo" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-para">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
