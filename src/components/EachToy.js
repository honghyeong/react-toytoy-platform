import React from "react";

const EachToy = ({ name, explanation, src, age }) => {
  return (
    <div className="age-toy">
      <div>
        <img className="age-toy-img" src={src} alt="src" />
      </div>
      <div className="age-toy-info">
        <div className="age-toy-name">{name}</div>
        <div className="age-toy-explanation">{explanation}</div>
        <div className="age-toy-category">
          <a href="">{age}</a>
        </div>
      </div>
    </div>
  );
};

export default EachToy;
