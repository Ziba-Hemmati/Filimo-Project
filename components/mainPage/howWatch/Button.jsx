import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Button = () => {
  return (
    <div>
      <button className="w-[100%] bg-gray-500 text-white py-3 rounded-lg text-[.7rem] transition-all delay-150  ease-in-out hover:bg-gray-400 md:w-[40%] lg:w-[30%] xl:w-[25%]">
        ویدیوهای آموزشی تماشا با تلویزیون
        <FontAwesomeIcon
          className="text-white text-sm mr-2 text-center"
          icon={faChevronLeft}
        />
      </button>
    </div>
  );
};
export default Button;
