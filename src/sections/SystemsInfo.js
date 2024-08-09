import React from "react";
import circles from "../assets/circles.svg";
import { useGSAP } from "@gsap/react";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SystemsInfo = () => {
  const text = [
    "Expert evaluation of the effectiveness of training systems.",
    "Systems for managing the growth of employee qualifications.",
    "The best systems of training and support of personnel.",
    "Recruitment and talent identification systems.",
    "Development of mechanisms for effective systematic management of business process performance.",
    "Systems for planning the development and retraining of the company's human resources.",
  ];

  useGSAP(() => {
    const textArray = gsap.utils.toArray(".information");
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      textArray.forEach((element) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "-300% top",
            end: "center top",
            scrub: true,
          },
          defaults: {
            ease: "power4.inOut",
            duration: 3,
          },
        });

        tl.to(element, { opacity: 1, stagger: 0.5 }).to(
          element,
          {
            opacity: 0.1,
            stagger: 0.5,
          },
          "-=.5"
        );
      });
    });

    mm.add("(max-width: 767px)", () => {
      textArray.forEach((element) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "center bottom",
            end: "center top",
            scrub: true,
          },
          defaults: {
            ease: "power4.inOut",
            duration: 3,
          },
        });

        tl.to(element, { opacity: 1, stagger: 0.5 }).to(
          element,
          {
            opacity: 0.1,
            stagger: 0.5,
          },
          "-=.5"
        );
      });
    });
  });

  return (
    <section
      id="systems-info"
      className="h-full relative flex justify-between items-center my-20 md:my-[200px]"
    >
      <div className="screen-width relative z-10 flex flex-col space-y-3 md:space-y-5">
        {text.map((item, index) => (
          <h1 className="information opacity-10" key={index}>
            {item}
          </h1>
        ))}
      </div>
      <img
        className="animate-blink absolute top-1/2 bottom-1/2 my-auto right-0"
        src={circles}
        alt="circles"
      />
    </section>
  );
};

export default SystemsInfo;
