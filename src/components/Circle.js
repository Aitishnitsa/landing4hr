import React from "react";
import circle from "../assets/circle.svg";

const Circle = ({ width, text }) => {
  return (
    <div
      className={`circle relative h-fit ${width} flex justify-center items-center`}
    >
      <img className={`${width} h-fit`} src={circle} alt="circle" />
      <div className="absolute text-left">
        <p className="uppercase text-primary2 lining-nums font-semibold text-xxs max-w-24 md:max-w-32">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Circle;
