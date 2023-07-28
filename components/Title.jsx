import clsx from "clsx";

const Title = ({ children, className }) => {
  return (
    <h3
      className={clsx(
        "font-iran-sans-medium  text-lg font-extrabold ",
        className
      )}
    >
      {children}
    </h3>
  );
};

export default Title;
