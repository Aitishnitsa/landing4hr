import { useGSAP } from "@gsap/react";
import gsap from "https://esm.sh/gsap";
import arrow from "../assets/arrow.svg";
import semicircle from "../assets/semicircle.svg";
import Circle from "../components/Circle";
import useScreenSize from "../hooks/useScreenSize";

const Experience = () => {
  const screenSize = useScreenSize();

  useGSAP(() => {
    const circles = gsap.utils.toArray(".circle");

    const onMouseMove = (event) => {
      const cursorX = event.clientX / screenSize.width - 0.5;
      const cursorY = event.clientY / screenSize.height - 0.5;

      circles.forEach((circle) => {
        gsap.to(circle, {
          x: cursorX * 20,
          y: cursorY * 20,
          ease: "power3.out",
          duration: 0.5,
        });
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative my-20 flex h-full items-center justify-between md:my-[200px]"
    >
      <div className="screen-width relative z-10 flex h-[1004px] w-full flex-col space-y-10 md:h-[650px] md:space-y-14">
        <h3 className="max-w-28">Time-tested experience</h3>
        <div>
          <h1 className="max-w-80 font-bold leading-none">
            Community of experts
          </h1>
          <h1 className="absolute right-0 top-96 max-w-52 font-bold leading-none md:top-80 md:max-w-72">
            Effective work with personnel
          </h1>
          <h1 className="absolute bottom-56 left-0 max-w-52 font-bold leading-none md:bottom-0 md:left-16 md:max-w-96">
            Agency on the international market
          </h1>

          <div className="absolute right-24 top-[490px] md:right-20 md:top-10">
            <Circle
              width={"w-[184px] md:w-56"}
              text={"More than 1500 successful hires."}
            />
          </div>
          <div className="absolute right-0 top-40 md:left-10 md:top-52 lg:left-44">
            <Circle
              width={"w-[184px] md:w-[219px]"}
              text={"3800 best experts from different niches."}
            />
          </div>
          <div className="absolute bottom-2 right-0 lg:right-60">
            <Circle
              width={"w-[184px] md:w-[198px]"}
              text={"More than 4.5 years of experience."}
            />
          </div>

          <div className="h-full w-full animate-vibrate">
            <img
              className="absolute -top-5 left-52 w-8 rotate-[135deg] md:left-60 md:top-0 md:w-11 lg:-top-20 lg:left-96"
              src={arrow}
              alt="arrow"
            />
          </div>
          <div className="h-full w-full animate-vibrate">
            <img
              className="absolute -bottom-[500px] right-10 w-8 rotate-[135deg] md:-bottom-48 md:right-44 md:w-11 md:rotate-45 lg:bottom-0 lg:right-80 lg:-rotate-45"
              src={arrow}
              alt="arrow"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute -top-32 right-0 animate-blink"
        src={semicircle}
        alt="circle"
      />
    </section>
  );
};

export default Experience;
