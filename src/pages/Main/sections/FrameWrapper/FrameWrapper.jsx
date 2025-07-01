import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const FrameWrapper = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/forecast?query=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate("/forecast");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="frame-wrapper">
      <div className="frame-2">
        <div className="uh-GLEE-pick">
          <span className="glee-pick-text">Uh!</span> <br />
          <span className="glee-pick-text">GLEE Pick</span>
        </div>
        <p className="p">못생겨도 맛은 그대로! 합리적인 선택</p>
      </div>

      <div className="frame-3">
        <div className="form">
          <div className="frame-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="search-input"
              placeholder="오늘의 합리적인 선택, 어떤 농산물이 궁금하신가요?"
            />
          </div>
        </div>

        <div
          className="frame-5"
          onClick={handleSearch}
          style={{ cursor: "pointer" }}
        >
          <div className="button-wrapper clickable-hover">
            <div className="button">
              <div className="search-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
