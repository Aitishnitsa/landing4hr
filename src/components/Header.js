import React from "react";
import Nav from "./Nav";
import users from "../assets/header/users.png";
import starYellow from "../assets/header/star.svg";
import starGray from "../assets/header/star2.svg";
import card0 from "../assets/header/header_card0.png";
import card1 from "../assets/header/header_card1.png";
import card2 from "../assets/header/header_card2.png";
import card3 from "../assets/header/header_card3.png";

const Header = () => {
  return (
    <header className="h-[630px] w-full bg-cover bg-center bg-headerBg flex flex-col">
      <Nav />
      <section className="screen-width flex items-start justify-between h-[398px] relative space-x-11">
        <div className="flex flex-col space-y-8 mt-24 w-[488px]">
          <div className="flex flex-col space-y-4">
            <h1>We create the best talent according to global standards</h1>
            <p>
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
      </section>
    </header>
  );
};

export default Header;
