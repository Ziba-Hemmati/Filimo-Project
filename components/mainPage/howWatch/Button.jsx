import "@fortawesome/fontawesome-svg-core/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"

const Button = () =>{
    return(
        <div >
            <button className="bg-gray-500 text-white px-7 ml-6 py-2.5 rounded-lg text-[.7rem]">
            ویدیوهای آموزشی تماشا با تلویزیون 
            <FontAwesomeIcon className="text-white text-sm mr-2 text-center" icon={faChevronLeft}/>
            </button>
        </div>
    )
}
export default Button;