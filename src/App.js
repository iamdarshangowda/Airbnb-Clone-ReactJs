import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import "./index.css";
import bride from "./components/images/bride.png";
import bike from "./components/images/bike.png";
import swimmer from "./components/images/swimmer.png";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="all-cards">
        <Cards
          img={swimmer}
          rating={5.0}
          reviewCount={6}
          location="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
          openSpots={0}
        />
        <Cards
          img={bride}
          rating={5.0}
          reviewCount={30}
          location="online"
          title="Learn Wedding Photography"
          price={125}
          openSpots={12}
        />
        <Cards
          img={bike}
          rating={4.8}
          reviewCount={2}
          location="Norway"
          title="Group Mountain Biking"
          price={50}
          openSpots={5}
        />
      </div>
      <a href="https://github.com/iamdarshangowda" className="credits">
        created by darshan gowda
      </a>
    </div>
  );
}
