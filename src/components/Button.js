import { useContext } from "react";
import { ContactFormContext } from "../context/ContactFormContext";

const Button = ({ classes, children }) => {
  const { toggleContactForm } = useContext(ContactFormContext);

  return (
    <button
      className={`${classes} rounded-full text-center text-xs font-bold transition-colors duration-300 ease-in-out`}
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
