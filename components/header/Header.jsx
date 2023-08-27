"use client";

import { useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import Search from "./Search";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import logo from "@/assets/images/logo.webp";

const Header = ({ data }) => {
  const navRef = useRef(null);

  const movies = data.movies;

  useEffect(() => {
    let prevScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentWidth = window.innerWidth;
      if (currentScrollY > 200 && currentWidth <= 768) {
        navRef.current.style.transform = "translateY(-150px)";
      } else if (currentScrollY < 100 && currentWidth <= 768) {
        navRef.current.style.transform = "translateY(0)";
      }
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="py-[3px] transition-transform duration-500 bg-black bg-opacity-[.9] sticky top-0 z-[20] w-full"
    >
      <div className="px-[10px] flex justify-between items-center my-3 md:px-[20px] xl:px-[100px]">
        <div className="flex items-center justify-center">
          <Link href={"/"} className="flex">
            <Image src={logo} alt="logo" className="w-[67px] sm:w-[75px] md:[80px] "/>
            {/* <img
              src="	https://www.filimo.com/assets/web/ui/img-L9r8reMpjELY3rdNzVYQ/filimo/fa-filimo-dark-logo.png"
              alt="logo-filimo"
              className="w-[67px] sm:w-[75px] md:[80px] "
            /> */}
            <div className="border border-gray-200 mx-4 lg:mx-8 hidden lg:inline"></div>
          </Link>
          <div className="hidden lg:inline">
            <Menu data={data} />
          </div>
          <Search movies={movies} />
        </div>
        <div className="flex items-center">
          <div className="text-white hover:text-orange-400">
            <Link
              href={"/bookmark"}
              className="flex items-center transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faCirclePlus} className="md:ml-2" />
              <span className="hidden md:inline text-[.6rem] lg:text-[.7rem] ">
                لیست‌های من
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Menu data={data} />
      </div>
    </nav>
  );
};

export default Header;
