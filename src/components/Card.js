import React from "react";
import Button from "./Button";

const Card = ({ info }) => {
  return (
    <>
      <li
        className={`${
          info.isMain
            ? "md:w-[235px] px-6 py-[22px] bg-primary2 md:mr-4"
            : "md:w-1/4 p-[22px] bg-bgColor border border-grey1 md:h-72"
        } w-[267px] rounded-xl flex flex-col space-y-5 justify-between`}
      >
        <div className="flex flex-col space-y-5">
          <h2 className={info.isMain ? "" : "text-base"}>{info.heading}</h2>
          <p
            className={
              info.isMain ? "text-sm" : "text-sm md:text-[13px] text-grey1"
            }
          >
            {info.text}
          </p>
        </div>
        <Button
          classes={
            info.isMain
              ? "bg-white px-7 py-3 text-primary2 text-sm md:text-base font-semibold hover:bg-transparent border hover:border-white hover:text-white"
              : "border px-8 py-2.5 border-white text-[13px] font-medium hover:bg-primary2 hover:border-primary2"
          }
          link={"#"}
        >
          <p
            className={
              info.isMain
                ? "text-primary2 text-sm md:text-base font-semibold hover:text-white"
                : "text-sm md:text-[13px] font-medium"
            }
          >
            I'm interested
          </p>
        </Button>
      </li>
    </>
  );
};

export default Card;
