import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className=" bg-green-900 w-full h-80 flex items-center justify-center text-center ">
      <div>
        <h1 className="text-white mb-14 text-5xl">فیلیمو</h1>
        <ul className="text-gray-300 text-xs flex flex-col items-center lg:flex-row lg:text-sm  ">
          <div className="flex items-center ">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-green-500 p-1 bg-green-800 rounded-full ml-2"
            />
            <li>هزاران فیلم و سریال خارجی (دوبله و زیرنویس)</li>
          </div>
          <div className="flex items-center leading-[3rem] lg:mx-[2rem]">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-green-500 p-1 bg-green-800 rounded-full ml-2 "
            />
            <li>هزاران انیمیشن و کارتون برای کودکان</li>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-green-500 p-1 bg-green-800 rounded-full ml-2"
            />
            <li>پشتیبانی 24 ساعته برای راهنمایی شما</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
