import React from "react";
import "../index.css";
import star from "./images/star.png";

export default function Cards(props) {
  return (
    <div className="card">
      <img src={props.img} alt="person-photo" className="card-img" />
      <div className="ratings">
        <img src={star} alt="star" className="star" />
        <p>
          {props.rating}
          <span className="lite-text">
            ({props.reviewCount})•{props.country}
          </span>
        </p>
      </div>
      <div className="card-text">
        <p>{props.title}</p>
        <p>
          <span className="bold">From ${props.price}</span>/ person
        </p>
      </div>
    </div>
  );
}
