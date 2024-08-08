import React from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <footer className="screen-width relative flex justify-between my-16">
        <div className="flex flex-col space-y-5 w-52">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <div className="flex justify-between">
            <span className="text-xs">© 2024, SkillHunter</span>
            <span className="text-xs">Privacy Policy</span>
          </div>
        </div>
        <div className="h-fit flex items-center space-x-10">
          <p className="leading-snug text-xs w-[132px]">
            Request a callback and speak with an expert
          </p>
          <Button
            classes={"bg-primary2 px-6 py-3 hover:bg-white hover:text-primary2"}
            link={"#"}
          >
            Write to the manager
          </Button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
