import React from "react";
import statsIcons from "../assets/stats.svg";

const BlurCard = ({ info, cardClass }) => {
  return (
    <li
      className={`${cardClass} backdrop-blur-md bg-black/15 flex flex-col space-y-5 rounded-xl px-5 py-[22px]`}
    >
      <img src={statsIcons} alt="stats icons" />
      <span className="text-xl font-extrabold lining-nums">{info.number}</span>
      <p className="text-xxs">{info.text}</p>
    </li>
  );
};

export default BlurCard;
