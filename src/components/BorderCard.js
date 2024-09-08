import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "https://esm.sh/gsap";

const BorderCard = ({ children }) => {
  const cardRef = useRef(null);
  useGSAP(() => {
    const card = cardRef.current;
    let bounds;
    let lastShadowOffsetX = 0;
    let lastShadowOffsetY = 0;
    let lastShadowBlur = 0;
    if (!card) return;

    const moveToMouse = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };

      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
      const rotationX = center.y / 50;
      const rotationY = -center.x / 50;

      const shadowOffsetX = -rotationY * 5;
      const shadowOffsetY = rotationX * 5;
      const shadowBlur = 20 + distance / 120;

      lastShadowOffsetX = shadowOffsetX;
      lastShadowOffsetY = shadowOffsetY;
      lastShadowBlur = shadowBlur;

      gsap.to(card, {
        rotationX: rotationX,
        rotationY: rotationY,
        transformPerspective: 500,
        ease: "power2.out",
        boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 6px rgba(143, 193, 255, .4)`,
      });
    };

    card.addEventListener("mouseenter", () => {
      bounds = card.getBoundingClientRect();
      document.addEventListener("mousemove", moveToMouse);

      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.6,
      });
    });

    card.addEventListener("mouseleave", () => {
      document.removeEventListener("mousemove", moveToMouse);

      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(card, {
        boxShadow: `${lastShadowOffsetX}px ${lastShadowOffsetY}px ${lastShadowBlur}px 0 rgba(143, 193, 255, .4)`,
        duration: 0.3,
        ease: "power3.out",
        onComplete: () => {
          gsap.to(card, {
            boxShadow: `0px 0px ${lastShadowBlur}px 0 rgba(0, 0, 0, 0)`,
            duration: 1.2,
          });
        },
      });
    });
  });

  return (
    <li
      ref={cardRef}
      className="border-card w-32 md:w-[211px] h-32 border border-grey1 rounded-xl flex justify-center items-center text-center"
    >
      {children}
    </li>
  );
};

export default BorderCard;
