import React, { useContext } from "react";
import { ContactFormContext } from "../context/ContactFormContext";

const Button = ({ classes, children }) => {
  const { toggleContactForm } = useContext(ContactFormContext);

  return (
    <button
      className={`${classes} rounded-full font-bold text-xs text-center transition-colors duration-300 ease-in-out`}
      onClick={(e) => {
        e.preventDefault();
        toggleContactForm();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
