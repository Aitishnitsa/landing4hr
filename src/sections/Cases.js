import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "https://esm.sh/gsap";
import caseImg from "../assets/case.svg";
import phone1 from "../assets/phones/phone1.png";
import phone2 from "../assets/phones/phone2.png";
import phone3 from "../assets/phones/phone3.png";
import phone4 from "../assets/phones/phone4.png";
import phone5 from "../assets/phones/phone5.png";
import phone6 from "../assets/phones/phone6.png";
import SectionHeading from "../components/SectionHeading";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Cases = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cases",
        start: "top 70%",
        end: "bottom 50%",
        scrub: 2,
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
      "-=1",
    );
  });

  return (
    <section
      id="cases"
      className="relative my-20 flex h-full items-center justify-between md:my-[200px]"
    >
      <div className="screen-width relative z-10 flex flex-col space-y-5">
        <div className="relative z-10 flex flex-col-reverse items-center md:flex-row md:items-start md:space-x-20">
          <div className="relative z-50 h-[460px] w-full max-w-lg grid-cols-3 grid-rows-6 gap-2 md:grid md:h-fit">
            <img
              className="phone1 absolute left-0 top-32 col-start-3 row-start-1 row-end-4 w-28 md:relative md:top-0 md:h-full md:w-40"
              src={phone1}
              alt="phone"
            />
            <img
              className="phone1 absolute left-20 top-16 col-start-2 row-start-2 row-end-5 w-28 md:relative md:left-0 md:top-0 md:h-full md:w-40"
              src={phone2}
              alt="phone"
            />
            <img
              className="phone1 absolute bottom-10 right-0 col-start-1 row-start-3 row-end-6 w-28 md:relative md:left-0 md:top-0 md:h-full md:w-40"
              src={phone3}
              alt="phone"
            />
          </div>
          <div className="max-w-44 md:mt-20">
            <SectionHeading heading3={"SMM"} heading1={"CASES"} center={true}>
              <p className="text-sm font-medium text-grey1">
                Business positioning system in social networks.
              </p>
            </SectionHeading>
          </div>
          <img
            className="absolute bottom-64 left-0 -z-10 rotate-[35deg] md:bottom-12 md:left-24 md:rotate-0"
            src={caseImg}
            alt="case"
          />
          <div className="animate-blink">
            <span className="blue-ellipse left-5 top-1/2 md:left-24 md:top-0"></span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center md:flex-row md:items-start md:space-x-20">
          <div className="max-w-44 md:mt-20">
            <SectionHeading heading3={"SMM"} heading1={"CASES"} center={true}>
              <p className="text-sm font-medium text-grey1">
                Business positioning system in social networks.
              </p>
            </SectionHeading>
          </div>
          <div className="relative z-50 h-[460px] w-full max-w-lg grid-cols-3 grid-rows-6 gap-2 md:grid md:h-fit">
            <img
              className="phone2 absolute left-0 top-32 col-start-1 row-start-1 row-end-4 w-28 md:relative md:top-0 md:h-full md:w-40"
              src={phone4}
              alt="phone"
            />
            <img
              className="phone2 absolute left-20 top-16 col-start-2 row-start-2 row-end-5 w-28 md:relative md:left-0 md:top-0 md:h-full md:w-40"
              src={phone5}
              alt="phone"
            />
            <img
              className="phone2 absolute bottom-10 right-0 col-start-3 row-start-3 row-end-6 w-28 md:relative md:left-0 md:top-0 md:h-full md:w-40"
              src={phone6}
              alt="phone"
            />
          </div>
          <img
            className="absolute bottom-64 left-0 -z-10 rotate-[35deg] md:bottom-8 md:left-16 md:rotate-[60deg]"
            src={caseImg}
            alt="case"
          />
          <div className="relative -z-50 animate-blink">
            <span className="blue-ellipse -right-32 bottom-5 md:right-48 md:top-20"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
