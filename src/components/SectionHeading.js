import React from "react";

const SectionHeading = ({ heading3, heading1, children }) => {
  return (
    <>
      <div className="flex flex-col space-y-4 text-sm font-medium">
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
