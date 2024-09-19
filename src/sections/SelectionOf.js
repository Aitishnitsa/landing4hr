import BlurCard from "../components/BlurCard";
import ListItem from "../components/ListItem";
import SectionHeading from "../components/SectionHeading";

const SelectionOf = ({ title, undertitle, tools, cardsInfo, children, id }) => {
  return (
    <section
      id={id}
      className="relative my-20 flex h-full flex-col items-center justify-between space-y-10 md:space-y-20 lg:my-[200px]"
    >
      <div className="screen-width relative z-10 flex h-full flex-col space-y-10 md:h-56 md:flex-row md:space-x-24 md:space-y-0">
        <SectionHeading heading3={"CASE"} heading1={title}>
          <p className="text-sm font-medium">{undertitle}</p>
        </SectionHeading>
        <div className="flex flex-col justify-end">
          <h3 className="mb-5">TOOLS:</h3>
          <ul className="flex flex-col space-y-3">
            {tools.map((text, index) => (
              <ListItem key={index} text={text} />
            ))}
          </ul>
        </div>
      </div>
      <ul className="relative z-50 flex w-full max-w-[216px] flex-col space-y-8 md:w-fit md:max-w-2xl md:flex-row md:space-x-4 md:space-y-0 lg:max-w-full lg:space-x-8">
        {cardsInfo.map((info, index) => (
          <BlurCard cardClass={info.section} key={index} info={info} />
        ))}
      </ul>
      {children}
    </section>
  );
};

export default SelectionOf;
