import React from "react";

const EachToy = ({ name, explanation, src }) => {
  return (
    <div className="age-toy">
      <img className="age-toy-img" src={src} alt="src" />
      <div>
        <div className="age-toy-name">{name}</div>
        <div className="age-toy-explanation">{explanation}</div>
      </div>
    </div>
  );
};

export default EachToy;
