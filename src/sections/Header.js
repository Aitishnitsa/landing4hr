import React, { useState, useEffect } from "react";
import useScreenSize from "../hooks/useScreenSize";
import Nav from "../components/Nav";
import users from "../assets/header/users.png";
import starYellow from "../assets/header/star.svg";
import starGray from "../assets/header/star2.svg";
import card0 from "../assets/header/header_card0.png";
import card1 from "../assets/header/header_card1.png";
import card2 from "../assets/header/header_card2.png";
import card3 from "../assets/header/header_card3.png";
import bdot from "../assets/header/blueDot.svg";
import odot from "../assets/header/orangeDot.svg";

const Header = () => {
  const [mobileMode, setMobileMode] = useState(false);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.width <= 768) {
      setMobileMode(true);
    } else {
      setMobileMode(false);
    }
  }, [screenSize.width]);

  return (
    <header className="h-[600px] md:h-[630px] w-full bg-cover bg-center bg-headerBg flex flex-col relative overflow-hidden">
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
              <li>
                <img src={starYellow} alt="star" />
              </li>
              <li>
                <img src={starYellow} alt="star" />
              </li>
              <li>
                <img src={starYellow} alt="star" />
              </li>
              <li>
                <img src={starYellow} alt="star" />
              </li>
              <li>
                <img src={starGray} alt="star" />
              </li>
            </ul>
          </div>
        </div>
        {!mobileMode && (
          <div className="relative w-[346px] h-[398px]">
            <img
              className="absolute bottom-[204px] left-0 w-[136px] hover:-translate-y-5 transition-transform duration-300 ease-in-out"
              src={card0}
              alt="star"
            />
            <img
              className="absolute bottom-0 left-0 w-[136px] hover:-translate-y-5 transition-transform duration-300 ease-in-out"
              src={card2}
              alt="star"
            />
            <img
              className="absolute top-5 left-[156px] w-[190px] hover:-translate-y-5 transition-transform duration-300 ease-in-out"
              src={card1}
              alt="star"
            />
            <img
              className="absolute top-[147px] left-[156px] w-[136px] hover:-translate-y-5 transition-transform duration-300 ease-in-out"
              src={card3}
              alt="star"
            />
          </div>
        )}
      </section>

      {/* dots */}
      <img
        className="animate-blink w-10 h-10 absolute z-1 top-[407px] md:top-[173px] left-[323px] md:left-[217px]"
        src={bdot}
        alt="dot"
      />
      <img
        className="animate-blink w-10 h-10 absolute z-1 top-[219px] md:top-[272px] left-[342px] md:left-[360px]"
        src={odot}
        alt="dot"
      />
      <img
        className="animate-blink w-10 h-10 absolute z-1 top-[490px] md:top-[518px] left-[85px] md:left-[436px]"
        src={odot}
        alt="dot"
      />
      <img
        className="animate-blink w-10 h-10 absolute z-1 top-[105px] left-[544px]"
        src={odot}
        alt="dot"
      />
      <img
        className="animate-blink w-10 h-10 absolute z-1 top-[430px] left-[688px]"
        src={bdot}
        alt="dot"
      />
      <img
        className="animate-blink w-10 h-10 absolute z-1 top-[232px] left-3 md:left-[709px]"
        src={odot}
        alt="dot"
      />
      <img
        className="animate-blink w-10 h-10 absolute z-1 top-[159px] left-[870px]"
        src={bdot}
        alt="dot"
      />
      <img
        className="animate-blink w-10 h-10 absolute z-1 top-[469px] left-[1000px]"
        src={odot}
        alt="dot"
      />
      <img
        className="animate-blink w-10 h-10 absolute z-1 top-[175px] left-[1084px]"
        src={odot}
        alt="dot"
      />
    </header>
  );
};

export default Header;
