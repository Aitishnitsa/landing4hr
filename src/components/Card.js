import React from "react";
import Button from "./Button";

const Card = ({ info }) => {
  return (
    <>
      <li
        className={`${
          info.isMain
            ? "w-[235px] px-6 py-[22px] bg-primary2 mr-4"
            : "w-1/4 p-[22px] bg-bgColor border border-grey1 h-72"
        } rounded-xl flex flex-col space-y-8 justify-between`}
      >
        <div className="flex flex-col space-y-5">
          <h2 className={info.isMain ? "" : "text-base"}>{info.heading}</h2>
          <p className={info.isMain ? "text-sm" : "text-[13px]"}>{info.text}</p>
        </div>
        <Button
          classes={
            info.isMain
              ? "bg-white px-7 py-3 text-primary2 text-base font-semibold hover:bg-transparent border hover:border-white hover:text-white"
              : "border px-8 py-2.5 border-white text-[13px] font-medium hover:bg-primary2 hover:border-primary2"
          }
          link={"#"}
        >
          I'm interested
        </Button>
      </li>
    </>
  );
};

export default Card;
