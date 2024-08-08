import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/Header";
import RecruitmentSystem from "./sections/RecruitmentSystem";
import RecruitmentStrategy from "./sections/RecruitmentStrategy";
import TrandingSystem from "./sections/TrandingSystem";
import SystemsInfo from "./sections/SystemsInfo";
import Cases from "./sections/Cases";
import SelectionOf from "./sections/SelectionOf";
import Experience from "./sections/Experience";
import Footer from "./components/Footer";
import InfiniteLooper from "./components/InfiniteLooper";

import paralax from "./assets/paralax.png";
import neoPost1 from "./assets/neoIT/neoPost1.png";
import neoPost2 from "./assets/neoIT/neoPost2.png";
import neoPost3 from "./assets/neoIT/neoPost3.png";
import post1 from "./assets/socialMarketing/post1.png";
import post2 from "./assets/socialMarketing/post2.png";
import post3 from "./assets/socialMarketing/post3.png";
import post4 from "./assets/socialMarketing/post4.png";
import sepia from "./assets/sepia.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  const tools1 = [
    "IT specialists' qualification assessment system;",
    "Personnel reserve selection system;",
    "Candidate training system;",
    "New employee support system.",
  ];
  const tools2 = [
    "Creating an HR Funnel;",
    "Expert assessment of soft skills;",
    "Analysis of compliance with business requirements;",
    "Selection of relevant candidates.",
  ];
  const cardsInfo1 = [
    { section: "info1", number: "2630", text: "Resumes received" },
    { section: "info1", number: "1106", text: "Resumes selected" },
    { section: "info1", number: "700+", text: "Interviews conducted" },
    { section: "info1", number: "372", text: "IT engineers hired" },
  ];
  const cardsInfo2 = [
    { section: "info2", number: "5700+", text: "Responces to the vacancy" },
    { section: "info2", number: "1800+", text: "Relevant candidates" },
    { section: "info2", number: "650+", text: "Candidates selected" },
  ];

  useGSAP(() => {
    const createTimeline = (trigger, target1, target2) => {
      return gsap
        .timeline({
          scrollTrigger: {
            trigger: trigger,
            start: "-20% top",
            end: "40% top",
            scrub: 2,
          },
          defaults: {
            ease: "power4.out",
            duration: 1,
          },
        })
        .from(target1, { yPercent: 100, opacity: 0 })
        .from(target2, { yPercent: 150 }, "<");
    };

    createTimeline("#it-specialists-section", ".info1", ".neo");
    createTimeline("#digital-marketers", ".info2", ".post");
  });

  return (
    <>
      <Header />
      <main>
        <RecruitmentSystem />
        <RecruitmentStrategy />
        <TrandingSystem />

        <section className="h-[600px] bg-cover bg-center">
          <img
            className="sticky -z-10 top-1/2 bottom-1/2 my-auto h-full w-full object-cover"
            src={paralax}
            alt="paralax"
          />
        </section>

        <SystemsInfo />
        <Cases />
        <SelectionOf
          title={"Selection of IT specialists"}
          undertitle={"Objective: Select and train promising IT engineers"}
          tools={tools1}
          cardsInfo={cardsInfo1}
          id={"it-specialists-section"}
        >
          <div className="animate-blink">
            <span className="orange-ellipse top-72 flex justify-center"></span>
          </div>
          <div className="relative z-20 h-96 w-full">
            <div className="absolute -top-48 left-48 -z-10 rotate-[22deg] grid grid-rows-4 grid-cols-3 gap-2">
              <img
                className="neo col-start-1 row-start-2 row-end-4 w-60"
                src={neoPost1}
                alt="post"
              />
              <img
                className="neo col-start-2 row-start-1 row-end-3 w-60"
                src={neoPost2}
                alt="post"
              />
              <img
                className="neo col-start-3 row-start-2 row-end-4 w-60"
                src={neoPost3}
                alt="post"
              />
            </div>
          </div>
        </SelectionOf>

        <SelectionOf
          title={"Selection of Digital Marketers"}
          undertitle={"Objective: Select and train promising IT engineers"}
          tools={tools2}
          cardsInfo={cardsInfo2}
          id={"digital-marketers"}
        >
          <div className="animate-blink">
            <span className="orange-ellipse animate-blink bottom-40 right-72"></span>
            <span className="white-ellipse animate-blink bottom-24 left-96"></span>
          </div>
          <div className="h-72 w-full relative -top-32">
            <div className="flex space-x-2 justify-center">
              <img
                className="post translate-y-16 h-96"
                src={post1}
                alt="post"
              />
              <img className="post translate-y-8 h-96" src={post2} alt="post" />
              <img className="post translate-y-0 h-96" src={post3} alt="post" />
              <img
                className="post translate-y-16 h-96"
                src={post4}
                alt="post"
              />
            </div>
          </div>
        </SelectionOf>

        <Experience />

        <section className="mt-[200px] mb-36">
          <h3 className="screen-width mb-5">CLIENTS</h3>
          <div className="flex flex-col space-y-14">
            <InfiniteLooper speed="20" direction="left"></InfiniteLooper>
            <InfiniteLooper speed="20" direction="right"></InfiniteLooper>
          </div>
        </section>

        <Footer />

        <img
          className="fixed -z-10 top-1/2 bottom-1/2 my-auto h-full w-full object-cover"
          src={sepia}
          alt="sepia"
        />
      </main>
    </>
  );
};

export default App;
