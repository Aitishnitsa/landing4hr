import React from "react";
import BorderCard from "../components/BorderCard";
import hrAgencyImg from "../assets/hr_agency.svg";

const RecruitmentSystem = () => {
  const borderCardText = [
    "Attracting qualified candidates",
    "Training of candidates",
    "Integration into the employer's corporate system",
    "Formation of corporate culture",
  ];

  return (
    <section className="screen-width h-full relative my-[200px]">
      <img
        className="absolute -top-16 right-0 m-0 z-0"
        src={hrAgencyImg}
        alt="hr agency"
      />
      <div className="relative z-10 flex flex-col space-y-14 ">
        <h1 className="w-96">RECRUITMENT SYSTEM</h1>
        <ul className="flex space-x-3">
          {borderCardText.map((text, index) => (
            <BorderCard key={index}>{text}</BorderCard>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RecruitmentSystem;
