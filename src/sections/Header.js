import { useGSAP } from "@gsap/react";
import gsap from "https://esm.sh/gsap";
import { useRef } from "react";
import Globe from "react-globe.gl";
import SplitType from "split-type";
import bdot from "../assets/header/blueDot.svg";
import odot from "../assets/header/orangeDot.svg";
import starYellow from "../assets/header/star.svg";
import starGray from "../assets/header/star2.svg";
import users from "../assets/header/users.png";
import Nav from "../components/Nav";
import useScreenSize from "../hooks/useScreenSize";

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
  const globeContainer = useRef();

  useGSAP(() => {
    if (!isMobile) {
      const globe = globeRef.current;
      const container = globeContainer.current;

      if (globe) {
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.5;
      }

      gsap.from(container, {
        xPercent: 150,
        duration: 3,
        ease: "power4.out",
      });
    }

    const split = new SplitType(".description");

    const typingTL = gsap.timeline();

    typingTL.from(split.chars, {
      duration: 0.01,
      autoAlpha: 0,
      stagger: {
        each: 0.07,
      },
    });
  }, []);

  return (
    <header className="relative flex h-[630px] w-full flex-col overflow-hidden bg-headerBg bg-cover bg-center md:h-screen">
      <Nav />
      <section className="screen-width relative mt-16 flex h-[398px] items-start justify-between space-x-11">
        <div className="mt-20 flex w-[488px] flex-col space-y-8">
          <div className="flex flex-col space-y-4">
            <h1>We create the best talent according to global standards</h1>
            <p className="description text-sm text-grey1">
              We successfully close the most challenging digital vacancies. We
              are trusted by companies with expert and non-standard projects
              because of our results.
            </p>
          </div>
          <div className="flex items-center space-x-8">
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
          className={`z-1 absolute h-10 w-10 animate-blink ${dot.style}`}
          src={dot.src}
          alt={`dot-${index}`}
        />
      ))}

      {!isMobile && (
        <div
          ref={globeContainer}
          className="z-1 absolute right-1/4 top-0 w-1/2 rotate-[23px]"
        >
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
