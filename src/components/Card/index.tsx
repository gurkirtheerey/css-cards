import React, { useEffect, useState } from "react";
import "./card.scss";

interface CardProps {
  cardKey?: number;
  name?: string;
  image?: string;
  weight?: string;
  height?: string;
}

export const Card: React.FC<CardProps> = ({
  cardKey,
  name,
  image,
  weight,
  height,
}) => {
  const [hover, setHover] = useState(false);

  const mouseEnter = (e: any) => {
    const target = e.target.id;
    const el = document.getElementById(target);
    if (el && el.style) {
      let w = window.innerHeight / 20;
      console.log(w);
      el.style.zIndex = "10";
      el.style.transform = `rotateY(360deg) translateY(-60px) scale(1.2)`;
      setHover(true);
    }
  };

  const mouseLeave = (e: any) => {
    const target = e.target.id;
    const el = document.getElementById(target);
    console.log(el);
    if (el && el.style) {
      setHover(false);
      el.style.zIndex = "0";
      el.style.background =
        "linear-gradient(0deg,rgba(151, 0, 255, 1) 0%,rgba(255, 0, 196, 1) 100%);";
      el.style.transform = `rotateY(0deg) translateY(0) translateX(0px)`;
      el.animate({});
    }
  };

  const front = (
    <div
      onMouseEnter={(e) => mouseEnter(e)}
      onMouseLeave={(e) => mouseLeave(e)}
      id={`card-${cardKey}`}
      className="card"
    >
      <div
        style={{
          height: "20rem",
          width: "20rem",
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          zIndex: 2,
        }}
      ></div>
      <div className="card-detail">
        <h2 className="card-detail">{name}</h2>
      </div>
      <div className="card-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa
        accusamus eligendi dolorum sunt eveniet quos id maxime sint assumenda!
        Veniam molestiae aspernatur autem ducimus delectus in a amet reiciendis!
      </div>

      <div className="card-footer">
        <button className="card-footer-btn">{height}</button>
        <button className="card-footer-btn">{weight}</button>
        <button className="card-footer-btn">{name}</button>
      </div>
    </div>
  );

  const back = (
    <div
      onMouseEnter={(e) => mouseEnter(e)}
      onMouseLeave={(e) => mouseLeave(e)}
      id={`card-${cardKey}`}
      className="card"
    >
      {name}
    </div>
  );

  return !hover ? front : back;
};
