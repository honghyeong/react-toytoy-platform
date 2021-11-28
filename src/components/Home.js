import React from "react";
import "../css/Home.scss";
import homeCategory1 from "../assets/homeCategory1.jpg";
import homeCategory2 from "../assets/homeCategory2.png";
import homeCategory3 from "../assets/homeCategory3.jpg";

const Home = () => {
  const clickSignUp = (event) => {
    window.location.href = "/users/signup";
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
      </style>

      <section>
        <div className="landing-1">
          <div className="container">
            <div className="left">
              <img className="logo" src="logo.svg" alt="logo.svg" />
              <h1>장난감 플랫폼, 토이토이</h1>
              <p>
                ToyToy는 어른과 어린이 모두를 위한 장난감 중고거래 플랫폼입니다.
              </p>
              <p>장난감을 카테고리별로 쉽게 사고, 팔고 추천해줄 수 있습니다.</p>
              <p>
                아이가 성장하면서 필요없어진 장난감을 안심하며 중고로 거래할 수
                있도록 도와줍니다.{" "}
              </p>
              <div className="mobile-button">
                <button onClick={clickSignUp} className="home-signup">
                  가입하기
                </button>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
        <div className="landing-2">
          <div className="heading">
            <p>"어린이 & 어른이가 모두 즐길 수 있는"</p>
            <span>장난감 플랫폼, 토이토이</span>
          </div>
          <div className="row">
            <div className="row1">
              <img
                className="landing2-img"
                src={homeCategory1}
                alt="homeCategory1.jpg"
              />
              <h5>다양한 카테고리 제공</h5>
              <p>나이 & 유아 발달단계에 맞는 장난감</p>
              <p>가격대에 맞는 장난감</p>
              <p>유튜버별 장난감</p>
              <p>
                어른도 즐길 수 있는 보드게임 장난감을 카테고리로 제공합니다.
              </p>
            </div>
            <div className="row2">
              <img
                className="landing2-img"
                src={homeCategory2}
                alt="homeCategory2.png"
              />
              <h5>필요 없어진 장난감 중고거래 지원</h5>
              <p>장난감 소독 & 검증을 통한 안전한 중고거래 보장하고,</p>
              <p>
                다른 장난감과 물물교환 할 수 있도록 지원하는 플랫폼을
                제공합니다.
              </p>
            </div>
            <div className="row3">
              <img
                className="landing2-img"
                src={homeCategory3}
                alt="homeCategory3.png"
              />
              <h5>토이빌리지 & 소품샵 접근성 증가</h5>
              <p>빠른 배송을 지원하며</p>
              <p>전세계의 다양한 장난감 구매할 수 있도록 지원합니다.</p>
            </div>
            <div className="col-md-6 col-lg-3 col-12"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
