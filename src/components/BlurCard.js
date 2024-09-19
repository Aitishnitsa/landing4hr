import statsIcons from "../assets/stats.svg";

const BlurCard = ({ info, cardClass }) => {
  return (
    <li
      className={`${cardClass} flex flex-col space-y-5 rounded-xl bg-black/15 px-5 py-[22px] backdrop-blur-md`}
    >
      <img src={statsIcons} alt="stats icons" />
      <span className="text-xl font-extrabold lining-nums">{info.number}</span>
      <p className="text-xxs">{info.text}</p>
    </li>
  );
};

export default BlurCard;
