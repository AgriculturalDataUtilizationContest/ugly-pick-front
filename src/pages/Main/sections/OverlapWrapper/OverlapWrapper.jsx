import React from "react";
import "./style.css";

export const OverlapWrapper = () => {
  return (
    <div className="overlap-wrapper">
      <div className="overlap">
        <div className="overlap-group">
          <div className="frame-12">
            <img
              className="vector"
              alt="Vector"
              src="https://c.animaapp.com/TSkI5naX/img/vector-112.svg"
            />

            <div className="text-wrapper-14">GLEE</div>
          </div>

          <img
            className="image"
            alt=""
            src="https://c.animaapp.com/TSkI5naX/img/image-175.png"
          />

          <div className="frame-13">
            <div className="text-wrapper-15">GLEE</div>
          </div>
        </div>

        <div className="frame-14">
          <div className="text-wrapper-16">이렇게까지 편리할 수 있다고?</div>

          <p className="a-2">
            드래그 앤 드롭으로 장바구니에 담고,
            <br />
            일반/못난이 실시간 가격 비교로 바로 확인해보세요!
          </p>
        </div>
      </div>
    </div>
  );
};
