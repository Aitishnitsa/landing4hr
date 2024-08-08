import React from "react";
import Card from "../components/Card";

const TrandingSystem = () => {
  const personnelTrandingText = [
    {
      isMain: true,
      heading: "QUALIFICATION",
      text: "Candidates are trained according to the best global training systems, such as the outbuilding system, where 90% of the training time is allocated to practice and 10% to theory, as well as similar systems.",
    },
    {
      isMain: false,
      heading: "TRANDING",
      text: "Qualified employees are trained according to the corporate system of the business partner, which significantly increases the production efficiency of future employees.",
    },
    {
      isMain: false,
      heading: "EMPLOYMENT",
      text: "We hire qualified and well-trained specialists, guaranteeing their high professional suitability and efficiency.",
    },
    {
      isMain: false,
      heading: "SUPPORT",
      text: "We support new employees for six months after they join the company, enhancing their skills and professional value.",
    },
  ];

  return (
    <section className="screen-width h-full relative flex justify-between items-center my-[200px]">
      <div className="relative z-10 flex flex-col space-y-14 ">
        <h1 className="max-w-md">PERSONNEL TRANDING SYSTEM</h1>
        <div className="relative">
          <ul className="flex space-x-5 items-center relative z-10">
            {personnelTrandingText.map((info, index) => (
              <Card key={index} info={info} />
            ))}
          </ul>
          <div className="absolute z-0 bottom-1/2 top-1/2 my-auto w-full h-[1px] bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default TrandingSystem;
