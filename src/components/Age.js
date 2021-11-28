import React from "react";
import EachToy from "./EachToy";
import slime from "../assets/slime.jpg";
import tayo from "../assets/tayo.jpg";
import jenga from "../assets/jenga.jpg";

// dummy toy data
const toylist = [
  {
    name: "slime",
    src: slime,
    explanation: "슬라임 재밌다!",
  },
  {
    name: "tayo",
    src: tayo,
    explanation: "타요 재밌다!",
  },
  {
    name: "jenga",
    src: jenga,
    explanation: "젠가 재밌다!",
  },
];

const Age = () => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
      </style>
      <section>
        <div className="age-landing-1">
          <div className="age-search"></div>
          <div className="age-sort"></div>
        </div>
        <div className="age-landing-2">
          <div className="age-total">
            {toylist.length}개의 장난감이 있습니다.
          </div>
          <div className="age-toy-container">
            {toylist.map((toy) => {
              return (
                <>
                  <EachToy
                    name={toy.name}
                    src={toy.src}
                    explanation={toy.explanation}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Age;
