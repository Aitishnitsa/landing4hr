import hrImg from "../assets/hr.svg";
import hrAgencyImg from "../assets/hr_agency.svg";
import BorderCard from "../components/BorderCard";
import useScreenSize from "../hooks/useScreenSize";

const RecruitmentSystem = () => {
  const borderCardText = [
    "Attracting qualified candidates",
    "Training of candidates",
    "Integration into the employer's corporate system",
    "Formation of corporate culture",
  ];
  const screenSize = useScreenSize();
  const isMobile = screenSize.width < 768;

  return (
    <section className="screen-width relative my-20 h-full md:my-[200px]">
      <img
        className="absolute -top-5 left-36 z-0 m-0 md:-top-16 md:right-0"
        src={isMobile ? hrImg : hrAgencyImg}
        alt="hr agency"
      />
      <div className="relative z-10 flex flex-col space-y-10 md:space-y-14">
        <h1 className="w-96">RECRUITMENT SYSTEM</h1>
        <ul className="flex flex-wrap gap-3 md:flex-nowrap">
          {borderCardText.map((text, index) => (
            <BorderCard key={index}>
              <p className="p-1 text-xs md:max-w-40 md:text-sm">{text}</p>
            </BorderCard>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RecruitmentSystem;
