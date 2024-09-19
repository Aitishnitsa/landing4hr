import circle from "../assets/circle.svg";

const Circle = ({ width, text }) => {
  return (
    <div
      className={`circle relative h-fit ${width} flex items-center justify-center`}
    >
      <img className={`${width} h-fit`} src={circle} alt="circle" />
      <div className="absolute text-left">
        <p className="max-w-24 text-xxs font-semibold uppercase lining-nums text-primary2 md:max-w-32">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Circle;
