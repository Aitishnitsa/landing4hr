import React, { createContext, useState } from "react";

export const ContactFormContext = createContext();

export const ContactFormProvider = ({ children }) => {
  const [isContactFormVisible, setContactFormVisible] = useState(false);

  const toggleContactForm = () => {
    setContactFormVisible(!isContactFormVisible);
  };

  return (
    <ContactFormContext.Provider
      value={{ isContactFormVisible, toggleContactForm }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};
