import { useGSAP } from "@gsap/react";
import gsap from "https://esm.sh/gsap";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import useScreenSize from "../hooks/useScreenSize";
import Button from "./Button";

const Nav = () => {
  const [showToggleBtn, setShowToggleBtn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const screenSize = useScreenSize();
  const lenis = useLenis(({ scroll }) => {});

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (screenSize.width <= 768) {
      setShowToggleBtn(true);
    } else {
      setShowToggleBtn(false);
      setShowMenu(false);
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
        "<",
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

  useGSAP(() => {
    const menu = menuRef.current;
    const toggleButton = toggleButtonRef.current;
    if (!menu || !toggleButton) return;

    const menuTl = gsap.timeline({
      defaults: { duration: 0.3, ease: "power4.inOut" },
    });

    if (showMenu) {
      menuTl.fromTo(
        menu,
        { opacity: 0, xPercent: 100 },
        {
          opacity: 1,
          xPercent: 0,
        },
      );
    } else {
      menuTl.to(menu, { opacity: 0, xPercent: 100 });
    }

    return () => {
      toggleButton.addEventListener("click", () => {
        if (!showMenu) {
          menuTl.play();
        } else {
          menuTl.reverse();
        }
      });

      return () => {
        toggleButton.removeEventListener("click", toggleMenu);
      };
    };
  }, [showMenu]);

  useEffect(() => {
    const handleAnchorClick = (event) => {
      event.preventDefault();

      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        lenis.scrollTo(targetElement, {
          offset: 0,
          duration: 1,
          easing: (x) => 1 - Math.pow(1 - x, 3),
        });
      }
    };

    const anchorLinks = document.querySelectorAll("a[href^='#']");
    anchorLinks.forEach((link) =>
      link.addEventListener("click", handleAnchorClick),
    );

    return () => {
      anchorLinks.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick),
      );
    };
  }, [lenis]);

  return (
    <>
      <div className="screen-width flex justify-between py-2 md:py-5">
        {showToggleBtn ? (
          <div
            className={"relative flex w-full flex-col items-stretch"}
            onClick={toggleMenu}
          >
            <div className="flex w-full items-center justify-between">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
              <button
                ref={toggleButtonRef}
                className={
                  "menu-toggle relative flex h-7 w-7 items-center justify-center"
                }
              >
                <svg
                  className={`${!showMenu && "active"} absolute inset-0`}
                  fill="none"
                  height="28"
                  viewBox="0 0 28 28"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z"
                    fill="white"
                    className="toggle-open-1"
                  ></path>
                  <path
                    d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z"
                    fill="white"
                    className="toggle-open-2"
                  ></path>
                  <path
                    d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z"
                    fill="white"
                    className="toggle-open-3"
                  ></path>
                </svg>
                <svg
                  className={`${showMenu && "active"} absolute inset-0`}
                  height="28"
                  version="1.1"
                  viewBox="0 0 32 32"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"
                    fill="#fff"
                    className="toggle-close-1"
                  />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </svg>
              </button>
            </div>
            <div
              ref={menuRef}
              style={{ opacity: 0 }}
              className="mobile-menu absolute left-1/2 top-16 z-50 -translate-x-1/2"
            >
              <nav className="h-1/3 w-full">
                <ul className="flex space-x-6 text-base font-semibold">
                  <li>
                    <a
                      href="#cases"
                      className="relative flex justify-between overflow-hidden"
                      onClick={toggleMenu}
                    >
                      CASES
                    </a>
                  </li>
                  <li>
                    <a
                      href="#it-specialists-section"
                      className="relative flex justify-between overflow-hidden"
                      onClick={toggleMenu}
                    >
                      TOOLS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="relative flex justify-between overflow-hidden"
                      onClick={toggleMenu}
                    >
                      ABOUT
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-10">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
              <nav>
                <ul className="flex space-x-6 text-xxs font-semibold">
                  <li>
                    <a
                      href="#cases"
                      className="relative flex justify-between overflow-hidden"
                    >
                      <div className="flex h-3 flex-col items-center justify-center overflow-hidden">
                        <p className="primary w-full translate-y-1/2">CASES</p>
                        <p className="secondary w-full translate-y-2/3">
                          CASES
                        </p>
                      </div>
                      <div className="line border-b-px absolute -bottom-px w-full origin-center scale-0 border border-white"></div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#it-specialists-section"
                      className="relative flex justify-between overflow-hidden"
                    >
                      <div className="flex h-3 flex-col items-center justify-center overflow-hidden">
                        <p className="primary w-full translate-y-1/2">TOOLS</p>
                        <p className="secondary w-full translate-y-2/3">
                          TOOLS
                        </p>
                      </div>
                      <div className="line border-b-px absolute -bottom-px w-full origin-center scale-0 border border-white"></div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="relative flex justify-between overflow-hidden"
                    >
                      <div className="flex h-3 flex-col items-center justify-center overflow-hidden">
                        <p className="primary w-full translate-y-1/2">ABOUT</p>
                        <p className="secondary w-full translate-y-2/3">
                          ABOUT
                        </p>
                      </div>
                      <div className="line border-b-px absolute -bottom-px w-full origin-center scale-0 border border-white"></div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex h-fit items-center space-x-5">
              <p className="w-[132px] text-xs leading-snug">
                Request a callback and speak with an expert
              </p>
              <Button
                classes={
                  "bg-primary2 px-6 py-3 hover:bg-white hover:text-primary2 uppercase"
                }
              >
                Write to the manager
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Nav;
