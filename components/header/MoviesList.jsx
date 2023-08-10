"use client";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
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

  // *********************************************************************
  const [changeIcon, setChangeIcon] = useState(false);
  const handleChangeIcon = useCallback(() => {
    setChangeIcon((prev) => !prev);
  }, [changeIcon]);

  return (
    <>
      <div className="flex items-center hover:text-orange-400 transition-colors duration-300">
        <Link
          href={"/movies"}
          onMouseOver={handleOver}
          onMouseLeave={handleLeave}
        >
          فیلم
        </Link>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="mr-2 hidden lg:inline-block "
          onClick={handleChangeIcon}
        />
        {changeIcon ? (
          <div onClick={handleLeave} className="lg:hidden flex items-end">
            <FontAwesomeIcon
              icon={faAngleUp}
              className="mr-2"
              onClick={handleChangeIcon}
            />
          </div>
        ) : (
          <div onClick={handleOver} className="lg:hidden flex items-end">
            <FontAwesomeIcon
              icon={faAngleDown}
              className="mr-2"
              onClick={handleChangeIcon}
            />
          </div>
        )}
      </div>
      <Transition in={isOver} timeout={300} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            onMouseOver={handleOver}
            onMouseLeave={handleLeave}
            className={`z-[2] flex flex-col px-4 absolute top-[82px] lg:top-[53px] bg-black-700 w-32 rounded-[4px] transition-transform transform shadow-lg ${
              state === "entered"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[-8px]"
            }`}
          >
            {categories.map(({ id, faName, enName }) => {
              return (
                <div
                  onClick={handleChangeIcon}
                  className="my-4 hover:text-orange-400 transition-colors duration-300"
                  key={id}
                >
                  <Link href={`/tag/${enName}`} onClick={handleLeave}>
                    {faName}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </Transition>
    </>
  );
};

export default MoviesList;
