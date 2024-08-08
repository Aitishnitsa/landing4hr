import React from "react";
import SectionHeading from "../components/SectionHeading";
import ListItem from "../components/ListItem";
import BlurCard from "../components/BlurCard";

const SelectionOf = ({ title, undertitle, tools, cardsInfo, children, id }) => {
  return (
    <section
      id={id}
      className="h-full relative flex flex-col space-y-20 justify-between items-center my-[200px]"
    >
      <div className="screen-width relative z-10 flex space-x-24 h-56">
        <SectionHeading heading3={"CASE"} heading1={title}>
          <p className="text-sm font-medium">{undertitle}</p>
        </SectionHeading>
        <div className="flex flex-col justify-end">
          <h3 className="mb-5">TOOLS</h3>
          <ul className="flex flex-col space-y-3">
            {tools.map((text, index) => (
              <ListItem key={index} text={text} />
            ))}
          </ul>
        </div>
      </div>
      <ul className="flex space-x-8 relative z-50">
        {cardsInfo.map((info, index) => (
          <BlurCard cardClass={info.section} key={index} info={info} />
        ))}
      </ul>
      {children}
    </section>
  );
};

export default SelectionOf;
