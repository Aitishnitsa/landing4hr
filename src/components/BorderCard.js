import React from "react";

const BorderCard = ({ children }) => {
  return (
    <>
      <li className="w-32 md:w-[211px] h-32 border border-grey1 rounded-xl flex justify-center items-center text-center">
        {children}
      </li>
    </>
  );
};

export default BorderCard;
