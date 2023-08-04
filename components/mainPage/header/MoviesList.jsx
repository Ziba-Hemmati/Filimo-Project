"use client"
import Link from "next/link";
import { useRef, useState } from "react";
import { Transition } from "react-transition-group";

const MoviesList = () => {
  const [isOver, setIsOver] = useState(false);
  const menuTimeout = useRef(null);

  const handleOver = () => {
    clearTimeout(menuTimeout.current);
    setIsOver(true);
  };

  const handleLeave = () => {
    menuTimeout.current = setTimeout(() => {
      setIsOver(false);
    }, 200);
  };

  return (
    <Transition in={isOver} timeout={300} mountOnEnter unmountOnExit>
      {(state) => (
        <div
          onMouseOver={handleOver}
          onMouseLeave={handleLeave}
          className={`z-[2] hidden lg:flex lg:flex-col px-4 lg:absolute lg:top-[56px] bg-black-850 w-32 rounded-[4px] transition-transform transform ${
            state === "entered"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-8px]"
          }`}
        >
          {categories.map(({ id, faName, enName }) => {
            return (
              <Link
                key={id}
                href={`/tag/${enName}`}
                className="my-4 hover:text-orange-600 transition-colors duration-300 "
              >
                {faName}
              </Link>
            );
          })}
        </div>
      )}
    </Transition>
  );
};

export default MoviesList;
