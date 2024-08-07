import React from "react";

const Button = ({ link, classes, children }) => {
  return (
    <a
      className={`${classes} rounded-full font-bold text-xs text-center transition-colors duration-300 ease-in-out`}
      href={link}
    >
      {children}
    </a>
  );
};

export default Button;
