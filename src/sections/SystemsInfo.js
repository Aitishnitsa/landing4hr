import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "https://esm.sh/gsap";
import circles from "../assets/circles.svg";

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

    textArray.forEach((element) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "bottom bottom",
          end: "bottom top",
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
        "-=.5",
      );
    });
  });

  return (
    <section
      id="systems-info"
      className="relative my-20 flex h-full items-center justify-between md:my-[200px]"
    >
      <div className="screen-width relative z-10 flex flex-col space-y-3 md:space-y-5">
        {text.map((item, index) => (
          <h1 className="information opacity-10" key={index}>
            {item}
          </h1>
        ))}
      </div>
      <img
        className="absolute bottom-1/2 right-0 top-1/2 my-auto animate-blink"
        src={circles}
        alt="circles"
      />
    </section>
  );
};

export default SystemsInfo;
