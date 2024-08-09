import React from "react";
import arrow from "../assets/arrow.svg";
import semicircle from "../assets/semicircle.svg";
import Circle from "../components/Circle";

const Experience = () => {
  return (
    <section className="h-full relative flex justify-between items-center my-20 md:my-[200px]">
      <div className="screen-width relative z-10 flex flex-col space-y-10 md:space-y-14 w-full h-[1004px] md:h-[650px]">
        <h3 className="max-w-28">Time-tested experience</h3>
        <div>
          <h1 className="font-bold leading-none max-w-80">
            Community of experts
          </h1>
          <h1 className="font-bold leading-none max-w-52 md:max-w-72 absolute right-0 top-96 md:top-80">
            Effective work with personnel
          </h1>
          <h1 className="font-bold leading-none max-w-52 md:max-w-96 absolute bottom-56 md:bottom-0 left-0 md:left-16">
            Agency on the international market
          </h1>

          <div className="absolute top-[490px] right-24 md:top-10 md:right-20">
            <Circle
              width={"w-[184px] md:w-56"}
              text={"More than 1500 successful hires."}
            />
          </div>
          <div className="absolute right-0 top-40 md:top-52 md:left-44">
            <Circle
              width={"w-[184px] md:w-[219px]"}
              text={"3800 best experts from different niches."}
            />
          </div>
          <div className="absolute bottom-2 right-0 md:right-60">
            <Circle
              width={"w-[184px] md:w-[198px]"}
              text={"More than 4.5 years of experience."}
            />
          </div>

          <img
            className="absolute top-24 left-52 md:left-96 rotate-[135deg] w-8 md:w-11"
            src={arrow}
            alt="arrow"
          />
          <img
            className="absolute bottom-72 md:top-64 right-10 md:right-80 rotate-[135deg] md:-rotate-45 w-8 md:w-11"
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
