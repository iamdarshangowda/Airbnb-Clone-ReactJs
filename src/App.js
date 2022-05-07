import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import "./index.css";
import data from "./data";

export default function App() {
  const card = data.map((item) => <Cards key={item.id} item={item} />);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="all-cards">{card}</div>
      <a href="https://github.com/iamdarshangowda" className="credits">
        created by darshan gowda
      </a>
    </div>
  );
}
