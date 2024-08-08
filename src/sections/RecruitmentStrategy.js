import React from "react";
import ListItem from "../components/ListItem";
import honeycombs from "../assets/honeycombs.png";

const RecruitmentStrategy = () => {
  const recruitmentAdaptationText = [
    "A comprehensive HR strategy from HR and business analytics specialists. ",
    "Solving recruitment and corporate culture problems with the help of SMM tools. ",
    "Streamlined process of recruitment and adaptation of personnel.",
    "More than 75,000 best digital specialists in our database.",
    "Candidates are trained according to the world's best personnel training systems and have practical, highly qualified experience.",
  ];

  return (
    <section className="screen-width h-full relative flex justify-between items-center my-[200px]">
      <div className="relative z-10 flex flex-col space-y-14 ">
        <h1 className="max-w-md">RECRUITMENT AND ADAPTATION STRATEGY</h1>
        <ul className="max-w-lg flex flex-col space-y-3">
          {recruitmentAdaptationText.map((text, index) => (
            <ListItem key={index} text={text} />
          ))}
        </ul>
      </div>
      <img className="max-w-72 h-fit" src={honeycombs} alt="honeycombs" />
    </section>
  );
};

export default RecruitmentStrategy;
