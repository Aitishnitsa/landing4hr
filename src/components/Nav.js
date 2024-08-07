import React from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";

const Nav = () => {
  return (
    <div className="flex justify-between py-5 screen-width">
      <div className="flex space-x-10 items-center">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <ul className="flex space-x-6 font-semibold text-[11px]">
            <li>
              <a href="#">CASES</a>
            </li>
            <li>
              <a href="#">TOOLS</a>
            </li>
            <li>
              <a href="#">ABOUT THE AGENCY</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-5">
        <p className="leading-snug text-xs w-[132px]">
          Request a callback and speak with an expert
        </p>
        <Button link={"#"} text={"Write to the manager"} />
      </div>
    </div>
  );
};

export default Nav;
