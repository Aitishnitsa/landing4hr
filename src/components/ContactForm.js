import emailjs from "@emailjs/browser";
import { useGSAP } from "@gsap/react";
import gsap from "https://esm.sh/gsap";
import { useContext, useRef, useState } from "react";
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
          },
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
        },
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
        },
      );
    e.target.reset();
  };

  return (
    <section className="relative flex w-full flex-col items-center justify-center">
      <div
        ref={formBg}
        onClick={toggleContactForm}
        className="contact-form fixed top-0 z-40 h-screen w-full bg-black/25 backdrop-blur-md"
      ></div>
      <div className="fixed top-1/2 z-50 flex w-full max-w-72 -translate-y-1/2 flex-col items-center justify-center md:max-w-md lg:max-w-2xl">
        <div className="overflow-hidden">
          <h1 ref={formTitle} className="form-heading mb-4">
            Write to manager
          </h1>
        </div>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-form flex w-full flex-col rounded-lg bg-bgColor p-4 shadow-[0px_0px_100px_0px_rgba(143,193,255,.4)]"
        >
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="user_name"
              className="mb-1 after:ml-0.5 after:text-2xl after:leading-[.25rem] after:text-red-500 after:content-['*']"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Enter your name..."
              className="ease rounded-md border border-lightBlack bg-transparent px-3 py-2 text-sm transition duration-300 hover:border-grey1 focus:border-primary2 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="user_email"
              className="mb-1 after:ml-0.5 after:text-2xl after:leading-[.25rem] after:text-red-500 after:content-['*']"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Enter your email..."
              className="ease peer mb-1 rounded-md border border-lightBlack bg-transparent px-3 py-2 text-sm transition duration-300 hover:border-grey1 focus:border-primary2 focus:outline-none"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <span className="mb-4 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Please enter a valid email address
            </span>
          </div>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="message"
              className="mb-1 after:ml-0.5 after:text-2xl after:leading-[.25rem] after:text-red-500 after:content-['*']"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Type here..."
              className="ease h-full min-h-[100px] resize-none rounded-md border border-lightBlack bg-transparent px-3 py-2 text-sm transition duration-300 hover:border-grey1 focus:border-primary2 focus:outline-none lg:min-h-[200px]"
              required
            />
          </div>
          <div className="flex w-full justify-around space-x-3">
            <button
              type="reset"
              onClick={toggleContactForm}
              className="w-full rounded-full border border-white py-1 font-bold transition-colors duration-300 ease-in-out hover:border-primary2"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-primary2 py-1 font-bold transition-colors duration-300 ease-in-out hover:bg-white hover:text-primary2"
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
