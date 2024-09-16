import React, { useState, useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useGSAP } from "@gsap/react";
import gsap from "https://esm.sh/gsap";
import { ContactFormContext } from "../context/ContactFormContext";

const ContactForm = () => {
  const { isContactFormVisible, toggleContactForm } =
    useContext(ContactFormContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const formRef = useRef();
  const formBg = useRef();
  const formTitle = useRef();

  useGSAP(() => {
    if (!formBg.current) return;

    const formTl = gsap.timeline({ duration: 1, ease: "power4.Out" });

    if (isContactFormVisible) {
      setIsAnimating(true);

      formTl
        .fromTo(
          formBg.current,
          { yPercent: -100 },
          {
            yPercent: 0,
          }
        )
        .from(formRef.current, {
          scale: 0,
        })
        .from(formTitle.current, {
          xPercent: -100,
        });
    } else {
      formTl
        .to(formRef.current, { scale: 0, transformOrigin: "top" })
        .to([formTitle.current, formBg.current], {
          yPercent: -100,
          onComplete: () => {
            setIsAnimating(false);
          },
        });
    }
  }, [isContactFormVisible]);

  if (!isContactFormVisible && !isAnimating) return null;

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
    <section className="relative w-full flex flex-col justify-center items-center">
      <div
        ref={formBg}
        onClick={toggleContactForm}
        className="contact-form h-screen backdrop-blur-md bg-black/25 w-full fixed top-0 z-40"
      ></div>
      <div className="w-full max-w-72 md:max-w-md lg:max-w-2xl fixed top-1/2 -translate-y-1/2 z-50 flex flex-col justify-center items-center">
        <div className="overflow-hidden">
          <h1 ref={formTitle} className="form-heading mb-4">
            Write to manager
          </h1>
        </div>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-form bg-bgColor w-full rounded-lg p-4 flex flex-col shadow-[0px_0px_100px_0px_rgba(143,193,255,.4)]"
        >
          <div className="flex flex-col mb-4">
            <label
              htmlFor="user_name"
              className="mb-1 after:content-['*'] after:text-2xl after:leading-[.25rem] after:ml-0.5 after:text-red-500"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Enter your name..."
              className="bg-transparent border border-lightBlack text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary2 hover:border-grey1 transition duration-300 ease"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="user_email"
              className="mb-1 after:content-['*'] after:text-2xl after:leading-[.25rem] after:ml-0.5 after:text-red-500"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Enter your email..."
              className="peer bg-transparent border border-lightBlack mb-1 text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary2 hover:border-grey1 transition duration-300 ease"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <span className="hidden mb-4 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Please enter a valid email address
            </span>
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="message"
              className="mb-1 after:content-['*'] after:text-2xl after:leading-[.25rem] after:ml-0.5 after:text-red-500"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Type here..."
              className="bg-transparent h-full min-h-[100px] lg:min-h-[200px] resize-none border border-lightBlack text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary2 hover:border-grey1 transition duration-300 ease"
              required
            />
          </div>
          <div className="w-full flex justify-around space-x-3">
            <button
              type="reset"
              onClick={toggleContactForm}
              className="border border-white hover:border-primary2 py-1 rounded-full w-full font-bold transition-colors duration-300 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary2 py-1 rounded-full w-full font-bold hover:bg-white hover:text-primary2 transition-colors duration-300 ease-in-out"
            >
              Send
            </button>
          </div>
          {stateMessage && (
            <p className="mt-3 w-full text-center">{stateMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};
export default ContactForm;
