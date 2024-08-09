import React from "react";

const SectionHeading = ({ heading3, heading1, center, children }) => {
  return (
    <>
      <div
        className={`${
          center &&
          "items-center justify-center text-center md:items-start md:justify-normal md:text-left"
        } flex flex-col space-y-4 text-sm font-medium`}
      >
        <div className="flex flex-col space-y-2">
          <h3>{heading3}</h3>
          <h1>{heading1}</h1>
        </div>
        {children}
      </div>
    </>
  );
};

export default SectionHeading;
