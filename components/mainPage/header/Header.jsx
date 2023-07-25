"use client";
import DesktopLogo from "./logos/DesktopLogo";
import MobileLogo from "./logos/MobileLogo";
import Search from "./search/Search";
import MyLists from "./myLists/MyLists";
import Menu from "./menu/Menu";

const Header = () => {
  return (
    <nav className="xl:flex xl:justify-center bg-black-950 bg-opacity-[.7] sticky top-0">
      <div className="items-center justify-center lg:p-2 md:pr-6 md:pl-6 lg:flex lg:px-0 xl:px-4">
        <DesktopLogo />
        <div className="flex flex-col lg:flex-row-reverse xl:justify-around xl:flex">
          <div className="flex justify-between items-center p-2 md:pr-6 md:pl-6 lg:pl-0  lg:pr-0">
            <MobileLogo />
            <Search />
            <MyLists />
          </div>
          <Menu />
        </div>
      </div>
    </nav>

 
  );
};

export default Header;
