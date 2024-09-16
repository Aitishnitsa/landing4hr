import React, { useState, useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ContactFormContext } from "../context/ContactFormContext";

const ContactForm = () => {
  const { isContactFormVisible, toggleContactForm } =
    useContext(ContactFormContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const formRef = useRef();

  if (!isContactFormVisible) return null;

  const sendEmail = async (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    await emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error);
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
    e.target.reset();
  };

  return (
    <section className="relative h-px w-full flex flex-col justify-center items-center">
      <div
        onClick={toggleContactForm}
        className="h-screen backdrop-blur-md bg-black/25 w-full fixed top-0 z-40"
      ></div>
      <div className="w-full max-w-72 md:max-w-md lg:max-w-2xl fixed top-1/2 -translate-y-1/2 z-50 flex flex-col justify-center items-center">
        <h1 className="mb-4">Write to manager</h1>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-bgColor w-full rounded-lg p-4 flex flex-col"
        >
          <div className="flex flex-col mb-4">
            <label className="mb-1 after:content-['*'] after:text-2xl after:leading-[.25rem] after:ml-0.5 after:text-red-500">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name..."
              className="bg-transparent border border-lightBlack text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary2 hover:border-grey1 transition duration-300 ease"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-1 after:content-['*'] after:text-2xl after:leading-[.25rem] after:ml-0.5 after:text-red-500">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email..."
              className="peer bg-transparent border border-lightBlack mb-1 text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary2 hover:border-grey1 transition duration-300 ease"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <span class="hidden mb-4 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Please enter a valid email address
            </span>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-1 after:content-['*'] after:text-2xl after:leading-[.25rem] after:ml-0.5 after:text-red-500">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Type here..."
              className="bg-transparent h-full min-h-[100px] lg:min-h-[200px] resize-none border border-lightBlack text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary2 hover:border-grey1 transition duration-300 ease"
              required
            />
          </div>
          <div className="w-full flex justify-around space-x-3">
            <button
              type="reset"
              onClick={toggleContactForm}
              className="border border-primary2 py-1 rounded-full w-full"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary2 py-1 rounded-full w-full font-bold text-white"
            >
              Send
            </button>
          </div>
          {stateMessage && <p className="my-2">{stateMessage}</p>}
        </form>
      </div>
    </section>
  );
};
export default ContactForm;
