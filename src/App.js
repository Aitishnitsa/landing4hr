import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "https://esm.sh/gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useMemo, useState } from "react";
import "./index.css";

import Preloader from "./components/Preloader";
import Cases from "./sections/Cases";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import RecruitmentStrategy from "./sections/RecruitmentStrategy";
import RecruitmentSystem from "./sections/RecruitmentSystem";
import SelectionOf from "./sections/SelectionOf";
import SystemsInfo from "./sections/SystemsInfo";
import TrandingSystem from "./sections/TrandingSystem";

import InfiniteLooper from "./components/InfiniteLooper";

import neoPost1 from "./assets/neoIT/neoPost1.png";
import neoPost2 from "./assets/neoIT/neoPost2.png";
import neoPost3 from "./assets/neoIT/neoPost3.png";
import paralax from "./assets/paralax.png";
import sepia from "./assets/sepia.png";
import post1 from "./assets/socialMarketing/post1.png";
import post2 from "./assets/socialMarketing/post2.png";
import post3 from "./assets/socialMarketing/post3.png";
import post4 from "./assets/socialMarketing/post4.png";
import ContactForm from "./components/ContactForm";
import { ContactFormProvider } from "./context/ContactFormContext";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);

  const images = useMemo(
    () => [
      paralax,
      neoPost1,
      neoPost2,
      neoPost3,
      post1,
      post2,
      post3,
      post4,
      sepia,
    ],
    [],
  );

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
    let mm = gsap.matchMedia();

    const createTimeline = (trigger, start, end, target1, target2) => {
      return gsap
        .timeline({
          scrollTrigger: {
            trigger: trigger,
            start: start,
            end: end,
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

    if (!loading) {
      mm.add("(min-width: 769px)", () => {
        createTimeline(
          "#it-specialists-section",
          "-20% top",
          "40% top",
          ".info1",
          ".neo",
        );
        createTimeline(
          "#digital-marketers",
          "-20% top",
          "40% top",
          ".info2",
          ".post",
        );
      });

      mm.add("(max-width: 768px)", () => {
        createTimeline(
          "#it-specialists-section",
          "10% top",
          "40% top",
          ".info1",
          ".neo",
        );
        createTimeline(
          "#digital-marketers",
          "10% top",
          "40% top",
          ".info2",
          ".post",
        );
      });

      gsap.from(".paralax", {
        yPercent: -45,
        ease: "none",
        scrollTrigger: {
          trigger: ".paralax",
          scrub: 1,
        },
      });
    }
  }, [loading]);

  useEffect(() => {
    let loadedImages = 0;
    const handleImageLoad = () => {
      loadedImages += 1;
      if (loadedImages === images.length) {
        setLoading(false);
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad;
    });
  }, [images]);

  return (
    <ContactFormProvider>
      <Preloader loading={loading} />
      <ContactForm />
      <ReactLenis root>
        <Header />
        <main className="overflow-hidden">
          <RecruitmentSystem />
          <RecruitmentStrategy />
          <TrandingSystem />

          <section className="h-52 bg-cover bg-center md:h-[600px]">
            <img
              className="paralax relative -bottom-20 -z-10 h-full w-full object-cover"
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
              <span className="blue-ellipse left-0 top-1/4 flex justify-center md:hidden"></span>
              <span className="orange-ellipse top-1/3 flex justify-center md:top-72"></span>
            </div>
            <div className="relative z-20 h-96 w-full">
              <div className="-z-10 rotate-[22deg] grid-cols-3 grid-rows-4 gap-2 md:absolute md:-top-48 md:left-10 md:grid lg:left-48">
                <img
                  className="neo absolute -top-0 left-10 col-start-1 row-start-2 row-end-4 w-[185px] md:relative md:left-0 md:top-0 md:w-60"
                  src={neoPost1}
                  alt="post"
                />
                <img
                  className="neo absolute left-1/3 top-16 col-start-2 row-start-1 row-end-3 w-[185px] md:relative md:left-0 md:top-0 md:w-60"
                  src={neoPost2}
                  alt="post"
                />
                <img
                  className="neo absolute -right-10 -top-20 col-start-3 row-start-2 row-end-4 w-[185px] md:relative md:left-0 md:top-0 md:w-60"
                  src={neoPost3}
                  alt="post"
                />
              </div>
            </div>
          </SelectionOf>

          <SelectionOf
            title={"Selection of Digital Marketers"}
            tools={tools2}
            cardsInfo={cardsInfo2}
            id={"digital-marketers"}
          >
            <div className="animate-blink">
              <span className="orange-ellipse -right-1/2 bottom-1/2 animate-blink md:bottom-40 md:right-72"></span>
              <span className="white-ellipse bottom-24 left-96 hidden animate-blink md:block"></span>
              <span className="blue-ellipse -left-1/2 bottom-1/3 animate-blink md:hidden"></span>
            </div>
            <div className="relative -top-10 h-96 w-full md:-top-32 md:h-72">
              <div className="flex justify-center space-x-px md:space-x-2">
                <img
                  className="post h-96 translate-y-16"
                  src={post1}
                  alt="post"
                />
                <img
                  className="post h-96 translate-y-8"
                  src={post2}
                  alt="post"
                />
                <img
                  className="post h-96 translate-y-0"
                  src={post3}
                  alt="post"
                />
                <img
                  className="post h-96 translate-y-16"
                  src={post4}
                  alt="post"
                />
              </div>
            </div>
          </SelectionOf>

          <Experience />

          <section className="mb-20 mt-16 md:mb-36 md:mt-[200px]">
            <h3 className="screen-width mb-5">CLIENTS</h3>
            <div className="flex flex-col space-y-14">
              <InfiniteLooper speed="20" direction="left"></InfiniteLooper>
              <InfiniteLooper speed="20" direction="right"></InfiniteLooper>
            </div>
          </section>

          <img
            className="fixed bottom-1/2 top-1/2 -z-50 my-auto h-full w-full select-none object-cover"
            src={sepia}
            alt="sepia"
          />
        </main>
        <Footer />
      </ReactLenis>
    </ContactFormProvider>
  );
};

export default App;
