import honeycombs from "../assets/honeycombs.png";
import ListItem from "../components/ListItem";

const RecruitmentStrategy = () => {
  const recruitmentAdaptationText = [
    "A comprehensive HR strategy from HR and business analytics specialists. ",
    "Solving recruitment and corporate culture problems with the help of SMM tools. ",
    "Streamlined process of recruitment and adaptation of personnel.",
    "More than 75,000 best digital specialists in our database.",
    "Candidates are trained according to the world's best personnel training systems and have practical, highly qualified experience.",
  ];

  return (
    <section className="screen-width relative my-20 flex h-full flex-col items-center justify-between md:my-[200px] md:flex-row">
      <div className="relative z-10 flex flex-col space-y-10 md:space-y-14">
        <h1 className="max-w-md">RECRUITMENT AND ADAPTATION STRATEGY</h1>
        <ul className="flex max-w-lg flex-col space-y-3">
          {recruitmentAdaptationText.map((text, index) => (
            <ListItem key={index} text={text} />
          ))}
        </ul>
      </div>
      <img
        className="relative z-20 mt-10 h-fit max-w-72 md:mt-0"
        src={honeycombs}
        alt="honeycombs"
      />
      <div className="animate-blink md:hidden">
        <span className="white-ellipse left-60 top-80 animate-blink"></span>
      </div>
    </section>
  );
};

export default RecruitmentStrategy;
