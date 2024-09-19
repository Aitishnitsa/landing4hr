import { useGSAP } from "@gsap/react";
import gsap from "https://esm.sh/gsap";
import SplitType from "split-type";
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
      className={`loader fixed left-1/2 z-50 w-full -translate-x-1/2 bg-black/25 backdrop-blur-md`}
    >
      <div className="flex h-screen items-center justify-center">
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
