import React from "react";
import logo from "../assets/logo.svg";
import Button from "../components/Button";

const Footer = () => {
  return (
    <>
      <footer className="screen-width relative flex flex-col-reverse md:flex-row items-center justify-between my-16 overflow-hidden">
        <div className="flex flex-col space-y-5 w-52 items-center md:items-start">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <div className="flex justify-between w-full">
            <span className="text-xs">© 2024, SkillHunter</span>
            <span className="text-xs">Privacy Policy</span>
          </div>
        </div>
        <div className="h-fit flex flex-col-reverse md:flex-row items-center md:space-x-10 mb-10 md:mb-0">
          <p className="leading-snug text-xs w-44 md:w-[132px] text-center md:text-start">
            Request a callback and speak with an expert
          </p>
          <Button
            classes={
              "bg-primary2 px-3 md:px-6 py-3 hover:bg-white hover:text-primary2 uppercase mb-3 md:mb-0"
            }
          >
            Write to the manager
          </Button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
