import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const Items = ({ children, className }) => {
  return (
    <ul className={clsx("text-gray-300 text-xs lg:text-sm", className)}>
      <div className="flex items-center ">
        <FontAwesomeIcon
          icon={faCheck}
          className="text-green-500 p-1 bg-green-800 rounded-full ml-2"
        />
        <li>{children}</li>
      </div>
    </ul>
  );
};
export default Items;

