import React from "react";
import { Star } from "../../../../components/Star";
import "./style.css";

export const SectionComponentNode = () => {
  return (
    <div className="section-component-node">
      <div className="overlap-2">
        <img
          className="img"
          alt="Group"
          src="https://c.animaapp.com/TSkI5naX/img/group-2609212-3@2x.png"
        />

        <div className="frame-15">
          <div className="frame-16">
            <div className="frame-17">
              <div className="text-wrapper-17">버려지는 농산물을 효율적으로 판매하여 좋습니다.</div>
            </div>
            <img className="vector-2" alt="Vector" src="https://c.animaapp.com/TSkI5naX/img/vector-1.svg" />
            <div className="frame-18">
              <img className="ellipse" alt="김민식" src="/img/kimminsik.jpg" />
              <div className="frame-19">
                <div className="frame-20">
                  <div className="frame-21">
                    <div className="text-wrapper-18">김민식</div>
                    <p className="text-wrapper-19">농부, 경상북도 포항시</p>
                  </div>
                </div>
                <div className="frame-22">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star-1" star={`https://c.animaapp.com/TSkI5naX/img/star-1-${i + 1}.svg`} starClassName="star-instance" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="frame-16">
            <div className="frame-17">
              <div className="text-wrapper-17">수익을 올릴 수 있고, 폐기 농산물도 줄여서 좋아요!</div>
            </div>
            <img className="vector-3" alt="Vector" src="https://c.animaapp.com/TSkI5naX/img/vector-1-1.svg" />
            <div className="frame-18">
              <img className="ellipse-2" alt="박재현" src="/img/parkjaehyun.jpg" />
              <div className="frame-19">
                <div className="frame-20">
                  <div className="frame-21">
                    <div className="text-wrapper-18">박재현</div>
                    <p className="text-wrapper-19">농부, 경기도 이천시</p>
                  </div>
                </div>
                <div className="frame-22">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star-1" star={`https://c.animaapp.com/TSkI5naX/img/star-1-${i + 6}.svg`} starClassName="star-instance" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="frame-16">
            <div className="frame-17">
              <div className="text-wrapper-17">가격 예측 기능으로 합리적인 장보기가 가능해요</div>
            </div>
            <img className="vector-3" alt="Vector" src="https://c.animaapp.com/TSkI5naX/img/vector-1-2.svg" />
            <div className="frame-18">
              <img className="ellipse-2" alt="김민지" src="/img/kimminji.jpg" />
              <div className="frame-19">
                <div className="frame-20">
                  <div className="frame-21">
                    <div className="text-wrapper-18">김민지</div>
                    <p className="text-wrapper-19">대학생, 자취생</p>
                  </div>
                </div>
                <div className="frame-22">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star-1" star={`https://c.animaapp.com/TSkI5naX/img/star-1-${i + 11}.svg`} starClassName="star-instance" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="frame-16">
            <div className="frame-17">
              <div className="text-wrapper-17">지속가능한 농업 생태계를 만들어가는 것 같습니다</div>
            </div>
            <img className="vector-3" alt="Vector" src="https://c.animaapp.com/TSkI5naX/img/vector-1-3.svg" />
            <div className="frame-18">
              <img className="ellipse-2" alt="최정훈" src="/img/choijunghun.jpg" />
              <div className="frame-19">
                <div className="frame-20">
                  <div className="frame-21">
                    <div className="text-wrapper-18">최정훈</div>
                    <p className="text-wrapper-19">농산물 유통업체 관계자</p>
                  </div>
                </div>
                <div className="frame-22">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star-1" star={`https://c.animaapp.com/TSkI5naX/img/star-1-${i + 16}.svg`} starClassName="star-instance" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-23">
          <div className="frame-24">
            <div className="frame-25">
              <div className="text-wrapper-20">Reviews</div>
            </div>
            <div className="frame-26">
              <p className="text-wrapper-21">Uh! Glee한 작은 소비가 만든 큰 이야기</p>
            </div>
          </div>

          <div className="frame-27">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="trustpilot-star-bg">
                <div className="group-2" />
              </div>
            ))}
            <div className="trustpilot-star-bg">
              <div className="half" />
              <div className="group-2" />
            </div>
          </div>

          <div className="text-wrapper-22">평점 4.5 / 5.0</div>
        </div>
      </div>

      <div className="frame-28">
        <div className="frame-29">
`        <div
          className="text-wrapper-23"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer" }} // 클릭 가능하다는 표시를 위해 커서 변경
          >
          Uh! Glee Pick하러가기
          </div>
        </div>
      </div>
    </div>
  );
};
