import clsx from "clsx";

const ImdbRate = ({ rate, className }) => {
  return (
    <div>
      <div
        className={clsx(
          "w-[74px] px-2 mr-1 pt-[1px] flex justify-between items-baseline rounded-3xl",
          className
        )}
      >
        <span className="font-black text-[.6rem]">IMDb</span>
        <span>{rate}/10</span>
      </div>
    </div>
  );
};

export default ImdbRate;
