import { useCallback, useEffect, useRef, useState } from "react";
import c1_1 from "../assets/looper/1/1.svg";
import c1_10 from "../assets/looper/1/10.svg";
import c1_11 from "../assets/looper/1/11.svg";
import c1_2 from "../assets/looper/1/2.svg";
import c1_3 from "../assets/looper/1/3.svg";
import c1_4 from "../assets/looper/1/4.svg";
import c1_5 from "../assets/looper/1/5.svg";
import c1_6 from "../assets/looper/1/6.svg";
import c1_7 from "../assets/looper/1/7.svg";
import c1_8 from "../assets/looper/1/8.svg";
import c1_9 from "../assets/looper/1/9.svg";
import c2_1 from "../assets/looper/2/1.svg";
import c2_10 from "../assets/looper/2/10.svg";
import c2_2 from "../assets/looper/2/2.svg";
import c2_3 from "../assets/looper/2/3.svg";
import c2_4 from "../assets/looper/2/4.svg";
import c2_5 from "../assets/looper/2/5.svg";
import c2_6 from "../assets/looper/2/6.svg";
import c2_7 from "../assets/looper/2/7.svg";
import c2_8 from "../assets/looper/2/8.svg";
import c2_9 from "../assets/looper/2/9.svg";

const InfiniteLooper = ({ speed, direction }) => {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const arr1 = [
    c1_1,
    c1_2,
    c1_3,
    c1_4,
    c1_5,
    c1_6,
    c1_7,
    c1_8,
    c1_9,
    c1_10,
    c1_11,
  ];
  const arr2 = [c2_1, c2_2, c2_3, c2_4, c2_5, c2_6, c2_7, c2_8, c2_9, c2_10];

  const resetAnimation = () => {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  };

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width: innerWidth } = innerRef.current.getBoundingClientRect();
    const { width: outerWidth } = outerRef.current.getBoundingClientRect();

    const widthDeficit = outerWidth - innerWidth;
    const instanceWidth = innerWidth / innerRef.current.children.length;

    if (widthDeficit > 0) {
      const newInstances =
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1;
      setLooperInstances(newInstances);
    }

    resetAnimation();
  }, [looperInstances]);

  useEffect(() => {
    setupInstances();
  }, [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [setupInstances]);

  return (
    <div className="w-full overflow-hidden" ref={outerRef}>
      <div
        className="looper__innerList centetr flex w-fit"
        ref={innerRef}
        data-animate="true"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
        }}
      >
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance flex w-max animate-none"
            style={{
              display: "inline-block",
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            <ul className="flex">
              {direction === "right"
                ? arr2.map((item) => (
                    <li key={item} className="px-7">
                      <img className="h-10" src={item} alt="post" />
                    </li>
                  ))
                : arr1.map((item) => (
                    <li key={item} className="px-7">
                      <img className="h-10" src={item} alt="post" />
                    </li>
                  ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLooper;
