import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./sections/Container";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { OverlapWrapper } from "./sections/OverlapWrapper";
// import { SectionComponentNode } from "./sections/SectionComponentNode";

import "./style.css";

export const Main = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleNavigate = () => {
    navigate("/forecast");
  };

  return (
    <div className="main" data-model-id="246:160">
      <div className="overlap-3">
        <img
          className="rectangle"
          alt="Rectangle"
          src="https://c.animaapp.com/TSkI5naX/img/rectangle-5.svg"
        />

        <Frame />

        <img
          className="image-2 clickable-hover"
          alt=""
          src="https://c.animaapp.com/TSkI5naX/img/image-158.svg"
          onClick={handleNavigate}
          style={{ cursor: "pointer" }}
        />

        <div className="group-wrapper">
          <div className="overlap-group-wrapper">
            <div className="overlap-4">
              <div className="group-7">
                <div className="overlap-5">
                  <img
                    className="subtract"
                    alt="Subtract"
                    src="https://c.animaapp.com/TSkI5naX/img/subtract-1.svg"
                    onClick={handleNavigate}
                    style={{ cursor: "pointer" }}
                  />

                  <div className="group-8">
                    <div className="overlap-6">
                      <div className="group-9">
                        <div className="overlap-group-2">
                          <div className="rectangle-2" />
                          <img
                            className="barcode-image"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/uglypick-barcode.png"
                            }
                            alt="UGLY PICK 바코드"
                          />
                        </div>
                      </div>
                      <div className="rectangle-3" />
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="rectangle-4"
                alt="Rectangle"
                src="https://c.animaapp.com/TSkI5naX/img/rectangle-9.svg"
              />
            </div>
          </div>
        </div>

        <div className="frame-36">
          <div className="frame-37">
            <div className="overlap-group-3">
              <div className="text-wrapper-28">UH!?</div>

              <img
                className="vector-4"
                alt="Vector"
                src="https://c.animaapp.com/TSkI5naX/img/vector-111.svg"
                onClick={handleNavigate}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>

        <img
          className="image-3"
          alt=""
          src="https://c.animaapp.com/TSkI5naX/img/image-173.png"
        />

        <div className="text-wrapper-29">원하는 농산물을 선택해보세요!</div>

        {/* 검색어 상태 전달 */}
        <FrameWrapper searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <DivWrapper />
      </div>

      <Footer />

      <div className="overlap-7">
        <div className="frame-38">
          <div className="frame-39">
            <div className="text-wrapper-30">PICK</div>

            <img
              className="vector-5"
              alt="Vector"
              src="https://c.animaapp.com/TSkI5naX/img/vector-113.svg"
            />
          </div>
        </div>

        <img
          className="image-4"
          alt=""
          src="https://c.animaapp.com/TSkI5naX/img/image-174.png"
          onClick={handleNavigate}
          style={{ cursor: "pointer" }}
        />

        <Div />
      </div>

      <OverlapWrapper />
      {/* <SectionComponentNode /> */}
      <Container />
    </div>
  );
};
