import {
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <div>
        <Link href={"/"}>
          <img
            src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/filimo/fa-filimo-dark-logo.png"
            alt="logo-filimo"
          />
        </Link>
        <div>جستوجو کنید...</div>
        <div>
          <Link href={"/bookmark"}>
            <FontAwesomeIcon icon={faCirclePlus} />
            لیستهای من
          </Link>
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </nav>
  );
};

export default Header;
