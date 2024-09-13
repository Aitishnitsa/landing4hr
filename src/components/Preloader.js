import React from "react";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "https://esm.sh/gsap";
import hrAgencyImg from "../assets/hr.svg";

const Preloader = ({ loading }) => {
  useGSAP(() => {
    const text = new SplitType(".loading");

    const tl = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
        repeat: -1,
        yoyo: true,
      },
    });

    gsap.set(".loading", { autoAlpha: 1 });

    tl.from(text.chars, {
      y: 40,
      opacity: 0,
      skewX: 30,
      stagger: 0.05,
      duration: 1,
    }).to(text.chars, {
      y: -40,
      opacity: 0,
      skewX: 30,
      stagger: 0.05,
      duration: 1,
    });
  });

  useGSAP(() => {
    if (!loading) {
      gsap.to(".loader", {
        yPercent: -100,
        delay: 1,
        duration: 1,
        ease: "power4.Out",
      });
    }
  }, [loading]);

  return (
    <div
      className={`loader backdrop-blur-md bg-black/25 w-full fixed z-50 left-1/2 -translate-x-1/2`}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="relative">
          <img
            className="preload-image -rotate-12 animate-rotate"
            src={hrAgencyImg}
            alt="hr agency"
          />
          <h1 className="loading absolute bottom-0 text-xl">Loading...</h1>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
