import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "https://esm.sh/gsap";
import Globe from "react-globe.gl";
import useScreenSize from "../hooks/useScreenSize";
import Nav from "../components/Nav";
import users from "../assets/header/users.png";
import starYellow from "../assets/header/star.svg";
import starGray from "../assets/header/star2.svg";
import bdot from "../assets/header/blueDot.svg";
import odot from "../assets/header/orangeDot.svg";

const dots = [
  {
    src: bdot,
    style: "top-[407px] md:top-[173px] left-[323px] md:left-[217px]",
  },
  {
    src: odot,
    style: "top-[219px] md:top-[272px] left-[342px] md:left-[360px]",
  },
  {
    src: odot,
    style: "top-[490px] md:top-[518px] left-[85px] md:left-[436px]",
  },
  { src: odot, style: "top-[105px] left-[544px]" },
  { src: bdot, style: "top-[430px] left-[688px]" },
  { src: odot, style: "top-[232px] left-3 md:left-[709px]" },
  { src: bdot, style: "top-[159px] left-[870px]" },
  { src: odot, style: "top-[469px] left-[1000px]" },
  { src: odot, style: "top-[175px] left-[1084px]" },
];

const N = 300;
const gData = [...Array(N).keys()].map(() => ({
  lat: (Math.random() - 0.5) * 180,
  lng: (Math.random() - 0.5) * 360,
  size: Math.random() / 3,
  color: ["#ff8a00", "#8fc1ff"][Math.round(Math.random() * 3)],
}));

const Header = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize.width < 768;
  const globeRef = useRef();

  useGSAP(() => {
    const globe = globeRef.current;

    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <header className="h-screen w-full bg-cover bg-center bg-headerBg flex flex-col relative overflow-hidden">
      <Nav />
      <section className="screen-width flex items-start justify-between h-[398px] relative space-x-11 mt-16">
        <div className="flex flex-col space-y-8 mt-20 w-[488px]">
          <div className="flex flex-col space-y-4">
            <h1>We create the best talent according to global standards</h1>
            <p className="text-sm text-grey1">
              We successfully close the most challenging digital vacancies. We
              are trusted by companies with expert and non-standard projects
              because of our results.
            </p>
          </div>
          <div className="flex space-x-8 items-center">
            <img className="h-8" src={users} alt="users" />
            <ul className="flex">
              {[...Array(4)].map((_, i) => (
                <li key={i}>
                  <img src={starYellow} alt="star" />
                </li>
              ))}
              <li>
                <img src={starGray} alt="star" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {dots.map((dot, index) => (
        <img
          key={index}
          className={`animate-blink w-10 h-10 absolute z-1 ${dot.style}`}
          src={dot.src}
          alt={`dot-${index}`}
        />
      ))}

      {!isMobile && (
        <div className="absolute z-1 top-0 right-1/4 w-1/2 rotate-[23px]">
          <Globe
            ref={globeRef}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            pointsData={gData}
            pointAltitude="size"
            pointColor="color"
            backgroundColor="#00000000"
            animateIn="true"
            objectRotation={{ x: 0, y: 180, z: 0 }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
