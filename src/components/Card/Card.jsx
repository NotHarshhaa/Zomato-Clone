import React from "react";
import "./Card.scss";
import Dine from "../../assets/images/Dine-Out.png";
import Night from "../../assets/images/Night-Life.png";
import Online from "../../assets/images/Online-Food.png";

const Card = () => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={Dine} alt="dineImg" />
        <h1>Order Online</h1>
        <span>Stay home and order to your doorstep</span>
      </div>
      <div className="cardImg">
        <img src={Night} alt="nightImg" />
        <h1>Nightlife and Clubs</h1>
        <span>Explore the city's top nightlife outlets</span>
      </div>
      <div className="cardImg">
        <img src={Online} alt="onlineImg" />
        <h1>Dinning</h1>
        <span>Views the city's favourite venues</span>
      </div>
    </div>
  );
};

export default Card;
