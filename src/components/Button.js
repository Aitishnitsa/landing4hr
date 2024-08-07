import React from "react";

const Button = ({ link, text }) => {
  return (
    <a
      className="bg-primary2 rounded-full px-6 py-3 font-bold text-xs hover:bg-white hover:text-primary2 transition-colors duration-300 ease-in-out"
      href={link}
    >
      {text}
    </a>
  );
};

export default Button;
