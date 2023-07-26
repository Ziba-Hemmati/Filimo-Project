import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Items = ({ text1, text2, text3 }) => {
  return (
    <>
      <ul className="text-gray-300 text-xs flex flex-col items-center lg:flex-row lg:text-sm lg:pb-16">
        <div className="flex items-center ">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-green-500 p-1 bg-green-800 rounded-full ml-2"
          />
          <li>{text1}</li>
        </div>
        <div className="flex items-center leading-[3rem] lg:mx-[2rem]">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-green-500 p-1 bg-green-800 rounded-full ml-2 "
          />
          <li>{text2}</li>
        </div>
        <div className="flex items-center pb-16 lg:pb-0">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-green-500 p-1 bg-green-800 rounded-full ml-2"
          />
          <li>{text3}</li>
        </div>
      </ul>
    </>
  );
};

export default Items;
