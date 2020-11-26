import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";
import img5 from "../assets/img-5.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              text="metus aliquam eleifend mi in."
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img2}
              text="metus aliquam eleifend mi in."
              label="Soccer beach"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="metus aliquam eleifend mi in."
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img4}
              text="metus aliquam eleifend mi in."
              label="Soccer beach"
              path="/services"
            />
            <CardItem
              src={img5}
              text="metus aliquam eleifend mi in."
              label="Soccer beach"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
