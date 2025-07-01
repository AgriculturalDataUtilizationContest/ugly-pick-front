import React from "react";
import "./style.css";

export const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="message">가격을 분석하고 있어요!</div>
        <div className="spinner" />
      </div>
    </div>
  );
};
