import Link from "next/link";

const DesktopLogo = () => {
  return (
    <Link href={"/"}>
      <img
        className="h-5 hidden lg:inline xl:h-6"
        src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/filimo/fa-filimo-dark-logo.png"
        alt="logo"
      />
      <span className="border h-6 border-gray-200 mx-6 hidden lg:inline"></span>
    </Link>
  );
};

export default DesktopLogo;
