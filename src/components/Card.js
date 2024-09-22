import Button from "./Button";

const Card = ({ info }) => {
  return (
    <li
      className={`${
        info.isMain
          ? "bg-primary2 px-6 py-[22px]"
          : "border border-grey1 bg-bgColor p-[22px] lg:h-72"
      } col-span-1 flex w-[267px] flex-col justify-between space-y-5 rounded-xl transition-all duration-300 ease-in-out hover:rounded-sm md:w-full`}
    >
      <div className="flex flex-col space-y-5">
        <h2 className={info.isMain ? "" : "text-base"}>{info.heading}</h2>
        <p
          className={
            info.isMain ? "text-sm" : "text-sm text-grey1 md:text-[13px]"
          }
        >
          {info.text}
        </p>
      </div>
      <Button
        classes={
          info.isMain
            ? "bg-white px-7 py-3 text-primary2 text-sm md:text-base font-semibold hover:bg-transparent border hover:border-white hover:text-white"
            : "border px-8 py-2.5 border-white text-[13px] font-medium hover:bg-primary2 hover:border-primary2"
        }
      >
        <p
          className={
            info.isMain
              ? "text-sm font-semibold text-primary2 hover:text-white lg:text-base"
              : "text-sm font-medium lg:text-[13px]"
          }
        >
          I'm interested
        </p>
      </Button>
    </li>
  );
};

export default Card;
