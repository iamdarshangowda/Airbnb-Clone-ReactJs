import React from "react";
import "../index.css";

export default function Cards(props) {
  let openSpot;
  if (props.item.openSpots === 0) {
    openSpot = "SOLD OUT";
  } else if (props.item.location === "online") {
    openSpot = "AVAILABLE";
  }
  return (
    <div className="card">
      {openSpot && <div className="badge">{openSpot}</div>}
      <img
        src={process.env.PUBLIC_URL + "/images/" + props.item.coverImg}
        alt="person-photo"
        className="card-img"
      />
      <div className="ratings">
        <img
          src={process.env.PUBLIC_URL + "/images/star.png"}
          alt="star"
          className="star"
        />
        <p>
          {props.item.rating}
          <span className="lite-text">
            ({props.item.reviewCount})•{props.item.location}
          </span>
        </p>
      </div>
      <div className="card-text">
        <p>{props.item.title}</p>
        <p>
          <span className="bold">From ${props.item.price}</span>/ person
        </p>
      </div>
    </div>
  );
}
