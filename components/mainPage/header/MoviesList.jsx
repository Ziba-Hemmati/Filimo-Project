"use client";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { Transition } from "react-transition-group";

const MoviesList = ({ categories }) => {
  const [isOver, setIsOver] = useState(false);
  const menuTimeout = useRef(null);

  const handleOver = useCallback(() => {
    clearTimeout(menuTimeout.current);
    setIsOver(true);
  }, []);

  const handleLeave = useCallback(() => {
    menuTimeout.current = setTimeout(() => {
      setIsOver(false);
    }, 200);
  }, []);

  return (
    <>
      <Link
        href={"/movies"}
        className="flex items-center hover:text-orange-600 transition-colors duration-300"
        onMouseOver={handleOver}
        onMouseLeave={handleLeave}
      >
        <span> فیلم </span>
        <div className="hidden md:flex items-end">
          <FontAwesomeIcon icon={faAngleDown} className="mr-1" />
        </div>
      </Link>
      <Transition in={isOver} timeout={300} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            onMouseOver={handleOver}
            onMouseLeave={handleLeave}
            className={`z-[2] hidden lg:flex lg:flex-col px-4 lg:absolute lg:top-[53px] bg-black-700 w-32 rounded-[4px] transition-transform transform shadow-lg ${
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
    </>
  );
};

export default MoviesList;
