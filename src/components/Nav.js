import React, { useState, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import logo from "../assets/logo.svg";
import burgerMenu from "../assets/header/burger_menu.svg";
import Button from "./Button";
import useScreenSize from "../hooks/useScreenSize";
import { useGSAP } from "@gsap/react";
import gsap from "https://esm.sh/gsap";

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
