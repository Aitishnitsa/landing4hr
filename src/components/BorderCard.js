import React from "react";

const BorderCard = ({ text }) => {
  return (
    <>
      <div className="w-[211px] h-32 border border-grey1 rounded-xl flex justify-center items-center text-center">
        {text}
      </div>
    </>
  );
};

export default BorderCard;
