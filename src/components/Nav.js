import React, { useState, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
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

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  useEffect(() => {
    const handleAnchorClick = (event) => {
      event.preventDefault();

      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        lenis.scrollTo(targetElement, {
          offset: 0, // Adjust the offset if needed
          duration: 1, // Duration in seconds for the scroll animation
          easing: (x) => 1 - Math.pow(1 - x, 3), // Custom easing function
        });
      }
    };

    // Add event listener to all anchor links
    const anchorLinks = document.querySelectorAll("a[href^='#']");
    anchorLinks.forEach((link) =>
      link.addEventListener("click", handleAnchorClick)
    );

    // Cleanup event listeners on unmount
    return () => {
      anchorLinks.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick)
      );
    };
  }, [lenis]);

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
                  <a href="#cases">CASES</a>
                </li>
                <li>
                  <a href="#it-specialists-section">TOOLS</a>
                </li>
                <li>
                  <a href="#about">ABOUT THE AGENCY</a>
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
