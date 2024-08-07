import "./index.css";
import Header from "./components/Header";
import BorderCard from "./components/BorderCard";
import Card from "./components/Card";
import ListItem from "./components/ListItem";
import hrAgencyImg from "./assets/hr_agency.svg";
import honeycombs from "./assets/honeycombs.png";
import paralax from "./assets/paralax.png";
import circles from "./assets/circles.svg";
import sepia from "./assets/sepia.png";
import SectionHeading from "./components/SectionHeading";

const App = () => {
  const borderCardText = [
    "Attracting qualified candidates",
    "Training of candidates",
    "Integration into the employer's corporate system",
    "Formation of corporate culture",
  ];
  const recruitmentAdaptationText = [
    "A comprehensive HR strategy from HR and business analytics specialists. ",
    "Solving recruitment and corporate culture problems with the help of SMM tools. ",
    "Streamlined process of recruitment and adaptation of personnel.",
    "More than 75,000 best digital specialists in our database.",
    "Candidates are trained according to the world's best personnel training systems and have practical, highly qualified experience.",
  ];
  const personnelTrandingText = [
    {
      isMain: true,
      heading: "QUALIFICATION",
      text: "Candidates are trained according to the best global training systems, such as the outbuilding system, where 90% of the training time is allocated to practice and 10% to theory, as well as similar systems.",
    },
    {
      isMain: false,
      heading: "TRANDING",
      text: "Qualified employees are trained according to the corporate system of the business partner, which significantly increases the production efficiency of future employees.",
    },
    {
      isMain: false,
      heading: "EMPLOYMENT",
      text: "We hire qualified and well-trained specialists, guaranteeing their high professional suitability and efficiency.",
    },
    {
      isMain: false,
      heading: "SUPPORT",
      text: "We support new employees for six months after they join the company, enhancing their skills and professional value.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="screen-width h-full relative">
          <img
            className="absolute -top-24 right-0 m-0 z-0"
            src={hrAgencyImg}
            alt="hr agency"
          />
          <div className="relative z-10 my-32 flex flex-col space-y-14 ">
            <h1 className="w-96">RECRUITMENT SYSTEM</h1>
            <ul className="flex space-x-3">
              {borderCardText.map((text, index) => (
                <BorderCard key={index}>{text}</BorderCard>
              ))}
            </ul>
          </div>
        </section>

        <section className="screen-width h-full relative flex justify-between items-center">
          <div className="relative z-10 my-32 flex flex-col space-y-14 ">
            <h1 className="max-w-md">RECRUITMENT AND ADAPTATION STRATEGY</h1>
            <ul className="max-w-lg">
              {recruitmentAdaptationText.map((text, index) => (
                <ListItem key={index} text={text} />
              ))}
            </ul>
          </div>
          <img className="max-w-72 h-fit" src={honeycombs} alt="honeycombs" />
        </section>

        <section className="screen-width h-full relative flex justify-between items-center">
          <div className="relative z-10 my-32 flex flex-col space-y-14 ">
            <h1 className="max-w-md">PERSONNEL TRANDING SYSTEM</h1>
            <div className="relative">
              <ul className="flex space-x-5 items-center relative z-10">
                {personnelTrandingText.map((info, index) => (
                  <Card key={index} info={info} />
                ))}
              </ul>
              <div className="absolute z-0 bottom-1/2 top-1/2 my-auto w-full h-[1px] bg-white"></div>
            </div>
          </div>
        </section>

        <section className="h-[600px] bg-cover bg-center">
          <img
            className="sticky -z-10 top-1/2 bottom-1/2 my-auto h-full w-full object-cover"
            src={paralax}
            alt="paralax"
          />
        </section>

        <section className="h-full relative flex justify-between items-center">
          <div className="screen-width relative z-10 my-32 flex flex-col space-y-5">
            <h1>Expert evaluation of the effectiveness of training systems.</h1>
            <h1>Systems for managing the growth of employee qualifications.</h1>
            <h1>The best systems of training and support of personnel.</h1>
            <h1>Recruitment and talent identification systems.</h1>
            <h1>
              Development of mechanisms for effective systematic management of
              business process performance.
            </h1>
            <h1>
              Systems for planning the development and retraining of the
              company's human resources.
            </h1>
          </div>
          <img
            className="absolute top-1/2 bottom-1/2 my-auto right-0"
            src={circles}
            alt="circles"
          />
        </section>

        <section className="h-full relative flex justify-between items-center">
          <div className="screen-width relative z-10 my-32 flex flex-col space-y-5">
            <SectionHeading heading3={"SMM"} heading1={"CASES"}>
              <p>Business positioning system in social networks.</p>
            </SectionHeading>
          </div>
        </section>

        <img
          className="fixed -z-10 top-1/2 bottom-1/2 my-auto h-full w-full object-cover"
          src={sepia}
          alt="sepia"
        />
      </main>
    </>
  );
};

export default App;
