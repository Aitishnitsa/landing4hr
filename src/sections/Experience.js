import React from "react";
import arrow from "../assets/arrow.svg";
import semicircle from "../assets/semicircle.svg";
import Circle from "../components/Circle";

const Experience = () => {
  return (
    <section className="h-full relative flex justify-between items-center my-[200px]">
      <div className="screen-width relative z-10 flex flex-col space-y-14 w-full h-[650px]">
        <h3>Time-tested experience</h3>
        <div>
          <h1 className="font-bold leading-none max-w-80">
            Community of experts
          </h1>
          <h1 className="font-bold leading-none max-w-72 absolute right-0 top-80">
            Effective work with personnel
          </h1>
          <h1 className="font-bold leading-none max-w-96 absolute bottom-0 left-16">
            Agency on the international market
          </h1>

          <div className="absolute top-10 right-20">
            <Circle width={"w-56"} text={"More than 1500 successful hires."} />
          </div>
          <div className="absolute top-52 left-44">
            <Circle
              width={"w-[219px]"}
              text={"3800 best experts from different niches."}
            />
          </div>
          <div className="absolute bottom-2 right-60">
            <Circle
              width={"w-[198px]"}
              text={"More than 4.5 years of experience."}
            />
          </div>

          <img
            className="absolute top-32 left-96 rotate-[135deg]"
            src={arrow}
            alt="arrow"
          />
          <img
            className="absolute top-64 right-80 -rotate-45"
            src={arrow}
            alt="arrow"
          />
        </div>
      </div>
      <img
        className="animate-blink absolute right-0 -top-32"
        src={semicircle}
        alt="circle"
      />
    </section>
  );
};

export default Experience;
