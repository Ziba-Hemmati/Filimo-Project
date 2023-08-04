import { getLocalData } from "@/lib/localdata";
import {
  faAngleDoubleDown,
  faFireFlameCurved,
  faHorse,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Menu = async () => {
  const data = await getLocalData();
  const categories = data.categories;
  
  return (
    <ul>
      <li>
        <Link href={"/"}>
          <FontAwesomeIcon icon={faFireFlameCurved} />
          فیلیموتور
        </Link>
      </li>
      <li>
        <Link href={"/movies"}>
          فیلم
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </Link>
        <MoviesList categories={categories} />
      </li>
      <li>
        <Link href={"/"}> سریال </Link>
      </li>
      <li>
        <Link href={"/"}> ایرانی </Link>
      </li>
      <li>
        <Link href={"/"}>
          <FontAwesomeIcon icon={faHorse} />
          کودک
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <FontAwesomeIcon icon={faPlay} /> فیلیمومدرسه
        </Link>
      </li>
      <li>
        <Link href={"/"}>مجموعه ها </Link>
      </li>
    </ul>
  );
};

export default Menu;
