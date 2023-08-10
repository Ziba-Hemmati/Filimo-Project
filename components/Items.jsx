import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const Items = ({ children, className }) => {
  return (
    <ul className={clsx("text-gray-300 text-[13px]", className)}>
      <div className="flex items-start justify-start">
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
