import logo from "../assets/logo.svg";
import Button from "../components/Button";

const Footer = () => {
  return (
    <>
      <footer className="screen-width relative my-16 flex flex-col-reverse items-center justify-between overflow-hidden md:flex-row">
        <div className="flex w-52 flex-col items-center space-y-5 md:items-start">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <div className="flex w-full justify-between">
            <span className="text-xs">© 2024, SkillHunter</span>
            <span className="text-xs">Privacy Policy</span>
          </div>
        </div>
        <div className="mb-10 flex h-fit flex-col-reverse items-center md:mb-0 md:flex-row md:space-x-10">
          <p className="w-44 text-center text-xs leading-snug md:w-[132px] md:text-start">
            Request a callback and speak with an expert
          </p>
          <Button
            classes={
              "bg-primary2 px-3 md:px-6 py-3 hover:bg-white hover:text-primary2 uppercase mb-3 md:mb-0"
            }
          >
            Write to the manager
          </Button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
