import React, { useContext } from "react";
import { ContactFormContext } from "../context/ContactFormContext";

const Button = ({ link, classes, children }) => {
  const { toggleContactForm } = useContext(ContactFormContext);

  return (
    <a
      className={`${classes} rounded-full font-bold text-xs text-center transition-colors duration-300 ease-in-out`}
      href={link}
      onClick={(e) => {
        e.preventDefault();
        toggleContactForm();
      }}
    >
      {children}
    </a>
  );
};

export default Button;
