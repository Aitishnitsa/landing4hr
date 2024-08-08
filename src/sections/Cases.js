import React from "react";
import SectionHeading from "../components/SectionHeading";
import phone1 from "../assets/phones/phone1.png";
import phone2 from "../assets/phones/phone2.png";
import phone3 from "../assets/phones/phone3.png";
import phone4 from "../assets/phones/phone4.png";
import phone5 from "../assets/phones/phone5.png";
import phone6 from "../assets/phones/phone6.png";
import caseImg from "../assets/case.svg";
import { useGSAP } from "@gsap/react";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Cases = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cases",
        start: "top 70%",
        end: "bottom 50%",
        scrub: 2,
        // markers: true,
      },
      defaults: {
        ease: "power4.out",
        duration: 1,
      },
    });

    tl.from(".phone1", { yPercent: 150, opacity: 0, stagger: 0.5 }).from(
      ".phone2",
      {
        yPercent: 150,
        opacity: 0,
        stagger: 0.5,
      },
      "-=1"
    );
  });

  return (
    <section
      id="cases"
      className="h-full relative flex justify-between items-center my-[200px]"
    >
      <div className="screen-width relative z-10 flex flex-col space-y-5">
        <div className="flex space-x-20 relative z-10">
          <div className="grid grid-cols-3 grid-rows-6 gap-2 max-w-lg relative z-50">
            <img
              className="phone1 col-start-3 row-start-1 row-end-4 h-full w-40"
              src={phone1}
              alt="phone"
            />
            <img
              className="phone1 col-start-2 row-start-2 row-end-5 h-full w-40"
              src={phone2}
              alt="phone"
            />
            <img
              className="phone1 col-start-1 row-start-3 row-end-6 h-full w-40"
              src={phone3}
              alt="phone"
            />
          </div>
          <div className="max-w-44">
            <SectionHeading heading3={"SMM"} heading1={"CASES"}>
              <p className="text-sm font-medium">
                Business positioning system in social networks.
              </p>
            </SectionHeading>
          </div>
          <img
            className="absolute -z-10 bottom-12 left-24"
            src={caseImg}
            alt="case"
          />
          <div className="animate-blink">
            <span className="white-ellipse top-0 left-24"></span>
          </div>
        </div>

        <div className="flex space-x-32 relative">
          <div className="max-w-44">
            <SectionHeading heading3={"SMM"} heading1={"CASES"}>
              <p className="text-sm font-medium">
                Business positioning system in social networks.
              </p>
            </SectionHeading>
          </div>
          <div className="grid grid-cols-3 grid-rows-6 gap-2 max-w-lg">
            <img
              className="phone2 col-start-1 row-start-1 row-end-4 h-full w-40"
              src={phone4}
              alt="phone"
            />
            <img
              className="phone2 col-start-2 row-start-2 row-end-5 h-full w-40"
              src={phone5}
              alt="phone"
            />
            <img
              className="phone2 col-start-3 row-start-3 row-end-6 h-full w-40"
              src={phone6}
              alt="phone"
            />
          </div>
          <img
            className="absolute -z-10 bottom-8 left-16 rotate-[60deg]"
            src={caseImg}
            alt="case"
          />
          <div className="animate-blink relative -z-50">
            <span className="white-ellipse top-20 right-48"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
