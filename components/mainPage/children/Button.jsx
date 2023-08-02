const Buttons = ({ children }) => {
  return (
    <>
      <button className="py-[.6rem] px-4 text-[.7rem] m-3 mb-8 rounded-lg bg-gray-200 fond-bold transition delay-150  ease-in-out hover:bg-gray-300 font-iran-sans-medium">
        {children}
      </button>
    </>
  );
};
export default Buttons;
