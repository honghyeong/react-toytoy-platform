import React from "react";
import "../css/CategoryAge.scss";

import EachToy from "./EachToy";
import slime from "../assets/slime.jpg";
import tayo from "../assets/tayo.jpg";
import jenga from "../assets/jenga.jpg";

// dummy toy data
const toylist = [
  {
    name: "slime",
    age: "유아",
    src: slime,
    explanation:
      "슬라임, 액체괴물(액괴) - 각각 1976년 2월 미국 마텔, 2006년 한국에서 출시된 구아검을 주재료로 한 슬라임의 상표명. 이것이 그대로 굳어져 '슬라임'은 슬라임 형태의 장난감을 이르는 총칭이 되었으며, '액체괴물'은 구아검을 주재료로 한 슬라임[2]을 이르는 말이 되었다.",
  },
  {
    name: "tayo",
    age: "유아",
    src: tayo,
    explanation:
      "서울특별시를 배경으로 한 교통수단 애니메이션. 서울시청[1]과 EBS가 공동으로 주관하여 아동들에게 교통을 알기 쉽게 이해시키자는 목적에서 제작되었다. 뽀롱뽀롱 뽀로로로 흥행에 성공한 아이코닉스가 기획을 하고 스튜디오 게일에서 외주 제작을 맡았다.",
  },
  {
    name: "jenga",
    age: "성인",
    src: jenga,
    explanation:
      "보드게임의 하나이자 세계에서 두 번째로 많이 팔리는 게임. Jenga는 스와힐리어로 쌓아올리다이다.",
  },
];

const CategoryAge = () => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
      </style>
      <section>
        <div className="age-landing-1">
          <div className="age-search">
            <input type="text"></input>
          </div>
          <div className="age-sort"></div>
        </div>
        <div className="age-landing-2">
          <div className="age-container">
            <div className="age-total">
              {toylist.length}개의 <span>장난감</span>이 있습니다.
            </div>
            <div className="age-toy-container">
              {toylist.map((toy) => {
                return (
                  <>
                    <EachToy
                      name={toy.name}
                      age={toy.age}
                      src={toy.src}
                      explanation={toy.explanation}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryAge;
