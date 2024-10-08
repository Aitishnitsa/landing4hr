import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "https://esm.sh/gsap";
import Card from "../components/Card";

gsap.registerPlugin(ScrollTrigger);

const TrandingSystem = () => {
  const personnelTrandingText = [
    {
      isMain: true,
      heading: "QUALIFICATION",
      text: "Candidates are trained according to the best global training systems, such as the outbuilding system, where 90% of the training time is allocated to practice and 10% to theory, as well as similar systems.",
    },
    {
      isMain: false,
      heading: "TRANDING",
      text: "Qualified employees are trained according to the corporate system of the business partner, which significantly increases the production efficiency of future employees.",
    },
    {
      isMain: false,
      heading: "EMPLOYMENT",
      text: "We hire qualified and well-trained specialists, guaranteeing their high professional suitability and efficiency.",
    },
    {
      isMain: false,
      heading: "SUPPORT",
      text: "We support new employees for six months after they join the company, enhancing their skills and professional value.",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#tranding-system",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none play reverse",
      },
      defaults: {
        ease: "power4.out",
        duration: 1,
      },
    });

    tl.fromTo(
      ".just-list li",
      {
        yPercent: 150,
      },
      {
        yPercent: 0,
        stagger: 0.2,
      },
    ).from(".card-line", {
      scale: 0,
    });
  });

  return (
    <section
      id="tranding-system"
      className="screen-width relative my-20 flex h-full items-center justify-between md:my-[200px]"
    >
      <div className="relative z-10 flex w-full flex-col space-y-10 md:space-y-14">
        <h1 className="max-w-72 md:max-w-md">PERSONNEL TRANDING SYSTEM</h1>
        <div className="relative flex justify-center lg:justify-start">
          <ul className="just-list relative z-10 grid grid-cols-1 items-center gap-y-8 overflow-hidden md:grid-cols-2 md:gap-x-5 lg:grid-cols-4">
            {personnelTrandingText.map((info, index) => (
              <Card key={index} info={info} />
            ))}
          </ul>
          <div className="card-line absolute bottom-1/2 top-1/2 z-0 my-auto hidden h-[1px] w-full origin-center bg-white lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default TrandingSystem;
