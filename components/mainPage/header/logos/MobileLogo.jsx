import Link from "next/link";

const MobileLogo = () => {
  return (
    <Link href={"/"}>
      <img
        className="h-5 lg:hidden"
        src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/filimo/fa-filimo-dark-logo.png"
        alt="logo"
      />
    </Link>
  );
};

export default MobileLogo;
