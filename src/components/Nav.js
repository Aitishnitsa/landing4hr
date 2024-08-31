import React, { useState, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import logo from "../assets/logo.svg";
// import burgerMenu from "../assets/header/burger_menu.svg";
import Button from "./Button";
import useScreenSize from "../hooks/useScreenSize";
import { useGSAP } from "@gsap/react";
import gsap from "https://esm.sh/gsap";

const Nav = () => {
  const [showToggleBtn, setShowToggleBtn] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const screenSize = useScreenSize();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (screenSize.width <= 768) {
      setShowToggleBtn(true);
    } else {
      setShowToggleBtn(false);
      setShowMenu(true);
    }
  }, [screenSize.width]);

  useGSAP(() => {
    const links = gsap.utils.toArray("nav ul li");

    links.forEach((link) => {
      let tl = gsap.timeline({
        defaults: { duration: 0.6, ease: "power4.inOut" },
      });

      const primary = link.querySelector(".primary");
      const secondary = link.querySelector(".secondary");
      const line = link.querySelector(".line");

      tl.to([primary, secondary], {
        transform: "translateY(-50%)",
      }).to(
        line,
        {
          transform: "scaleX(1)",
        },
        "<"
      );
      tl.pause();

      link.addEventListener("mouseenter", () => {
        tl.play();
      });
      link.addEventListener("mouseleave", () => {
        tl.reverse();
      });
    });
  });

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
          <nav className="flex">
            <div
              className={`${
                showMenu && showToggleBtn ? "hidden" : "block"
              } flex space-x-1 md:space-x-2`}
            >
              <nav>
                <ul className="flex space-x-6 font-semibold text-xxs">
                  <li>
                    <a
                      href="#cases"
                      className="relative overflow-hidden flex justify-between"
                    >
                      <div className="overflow-hidden h-3 flex items-center justify-center flex-col">
                        <p className="primary w-full translate-y-1/2">CASES</p>
                        <p className="secondary w-full translate-y-2/3">
                          CASES
                        </p>
                      </div>
                      <div className="line absolute -bottom-px origin-center w-full scale-0 border border-b-px border-white"></div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#it-specialists-section"
                      className="relative overflow-hidden flex justify-between"
                    >
                      <div className="overflow-hidden h-3 flex items-center justify-center flex-col">
                        <p className="primary w-full translate-y-1/2">TOOLS</p>
                        <p className="secondary w-full translate-y-2/3">
                          TOOLS
                        </p>
                      </div>
                      <div className="line absolute -bottom-px origin-center w-full scale-0 border border-b-px border-white"></div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="relative overflow-hidden flex justify-between"
                    >
                      <div className="overflow-hidden h-3 flex items-center justify-center flex-col">
                        <p className="primary w-full translate-y-1/2">ABOUT</p>
                        <p className="secondary w-full translate-y-2/3">
                          ABOUT
                        </p>
                      </div>
                      <div className="line absolute -bottom-px origin-center w-full scale-0 border border-b-px border-white"></div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <button
              className={showToggleBtn ? "block" : "hidden"}
              onClick={toggleMenu}
            >
              {showMenu ? (
                <svg
                  fill="none"
                  height="28"
                  viewBox="0 0 28 28"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z"
                    fill="white"
                  />
                  <path
                    d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z"
                    fill="white"
                  />
                  <path
                    d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  height="28"
                  version="1.1"
                  viewBox="0 0 32 32"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"
                    fill="#fff"
                  />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </svg>
              )}
            </button>
          </nav>
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
                  <a
                    href="#cases"
                    className="relative overflow-hidden flex justify-between"
                  >
                    <div className="overflow-hidden h-3 flex items-center justify-center flex-col">
                      <p className="primary w-full translate-y-1/2">CASES</p>
                      <p className="secondary w-full translate-y-2/3">CASES</p>
                    </div>
                    <div className="line absolute -bottom-px origin-center w-full scale-0 border border-b-px border-white"></div>
                  </a>
                </li>
                <li>
                  <a
                    href="#it-specialists-section"
                    className="relative overflow-hidden flex justify-between"
                  >
                    <div className="overflow-hidden h-3 flex items-center justify-center flex-col">
                      <p className="primary w-full translate-y-1/2">TOOLS</p>
                      <p className="secondary w-full translate-y-2/3">TOOLS</p>
                    </div>
                    <div className="line absolute -bottom-px origin-center w-full scale-0 border border-b-px border-white"></div>
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="relative overflow-hidden flex justify-between"
                  >
                    <div className="overflow-hidden h-3 flex items-center justify-center flex-col">
                      <p className="primary w-full translate-y-1/2">ABOUT</p>
                      <p className="secondary w-full translate-y-2/3">ABOUT</p>
                    </div>
                    <div className="line absolute -bottom-px origin-center w-full scale-0 border border-b-px border-white"></div>
                  </a>
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
