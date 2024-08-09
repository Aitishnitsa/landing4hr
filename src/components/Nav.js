import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import burgerMenu from "../assets/header/burger_menu.svg";
import Button from "./Button";
import useScreenSize from "../hooks/useScreenSize";

const Nav = () => {
  const [showToggleBtn, setShowToggleBtn] = useState(false);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.width <= 768) {
      setShowToggleBtn(true);
    } else {
      setShowToggleBtn(false);
    }
  }, [screenSize.width]);

  return (
    <div className="flex justify-between py-2 md:py-5 screen-width">
      {showToggleBtn ? (
        <div className="w-full flex justify-between">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <button>
            <img src={burgerMenu} alt="menu button" />
          </button>
        </div>
      ) : (
        <>
          <div className="flex space-x-10 items-center">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
            <nav>
              <ul className="flex space-x-6 font-semibold text-xxs">
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
          <div className="h-fit flex items-center space-x-5">
            <p className="leading-snug text-xs w-[132px]">
              Request a callback and speak with an expert
            </p>
            <Button
              classes={
                "bg-primary2 px-6 py-3 hover:bg-white hover:text-primary2 uppercase"
              }
              link={"#"}
            >
              Write to the manager
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Nav;
