import React from "react";
import "./carousel.css";
import { Slider } from "@mui/material";
import Cards from "../Card/card";

export default function Carousel({ cardData, cardType }) {
  const cards = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div className="slider-container">
      <Slider {...cards}>
        {cardData.length !== 0 &&
          cardData.map((card) => (
            <Cards key={card.id} card={card} type={cardType} />
          ))}
      </Slider>
    </div>
  );
}
