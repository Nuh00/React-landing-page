import React from "react";
import CardItem from "./CardItem";
import "./cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these epic destinations!!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-7.jpg"
              text='Travel through the Islands of Bali in a Private Cruise'
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-1.jpg"
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text='Experience Football on Top of the Himilayan Mountains'
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
