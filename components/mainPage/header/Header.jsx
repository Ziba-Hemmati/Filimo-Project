import DesktopLogo from "./logos/DesktopLogo";
import MobileLogo from "./logos/MobileLogo";
import Search from "./search/Search";
import MyLists from "./myLists/MyLists";
import Menu from "./menu/Menu";
import { getLocalData } from "@/lib/localdata";

const Header = async () => {
  const data = await getLocalData();
  const categories = data.categories;
  return (
    <nav className="z-10 lg:py-2 xl:py-1 xl:flex xl:justify-center bg-black-950 bg-opacity-[.7] sticky top-0">
      <div className="items-center justify-center md:px-5 lg:flex lg:px-0">
        <DesktopLogo />
        <div className="flex flex-col lg:flex-row-reverse xl:justify-around xl:flex">
          <div className="flex justify-between items-center p-2 md:px-0 lg:pl-0 lg:pr-0">
            <MobileLogo />
            <Search />
            <MyLists />
          </div>
          <Menu categories={categories} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
