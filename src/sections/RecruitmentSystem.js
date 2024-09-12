import React from "react";
import useScreenSize from "../hooks/useScreenSize";
import BorderCard from "../components/BorderCard";
import hrAgencyImg from "../assets/hr_agency.svg";
import hrImg from "../assets/hr.svg";

const RecruitmentSystem = () => {
  const borderCardText = [
    "Attracting qualified candidates",
    "Training of candidates",
    "Integration into the employer's corporate system",
    "Formation of corporate culture",
  ];
  const screenSize = useScreenSize();
  const isMobile = screenSize.width < 768;

  return (
    <section className="screen-width h-full relative my-20 md:my-[200px]">
      <img
        className="absolute -top-5 md:-top-16 left-36 md:right-0 m-0 z-0"
        src={isMobile ? hrImg : hrAgencyImg}
        alt="hr agency"
      />
      <div className="relative z-10 flex flex-col space-y-10 md:space-y-14">
        <h1 className="w-96">RECRUITMENT SYSTEM</h1>
        <ul className="flex gap-3 flex-wrap md:flex-nowrap">
          {borderCardText.map((text, index) => (
            <BorderCard key={index}>
              <p className="p-1 text-xs md:text-sm md:max-w-40">{text}</p>
            </BorderCard>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RecruitmentSystem;
