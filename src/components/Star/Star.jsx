import React from "react";
import "./style.css";

export const Star = ({
  className,
  starClassName,
  star = "https://c.animaapp.com/TSkI5naX/img/star-1.svg",
}) => {
  return (
    <div className={`star ${className}`}>
      <img className={`img-2 ${starClassName}`} alt="Star" src={star} />
    </div>
  );
};
