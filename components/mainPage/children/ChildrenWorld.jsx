import Buttons from "./Button";
import Description from "./Description";
import Image from "next/image";
import bgkids from "@/assets/images/bg-kids.webp";
const ChildrenWorld = () =>{
    return(
        <div className="px-[10px] bg-gradient-to-tr from-black-950 via-black-900 to-blue-800 md:flex flex-row-reverse xl:px-24 lg:pt-8"> 
            <div className="md:max-w-[42%] md:m-14  xl:max-w-[50%] xl:mt-[7rem] ">
                <Description/>
                <Buttons/>
            </div>
            <div className="flex items-center justify-center w-[90%] md:mr-12 md:max-[47%] xl:mr-[8rem] xl:max-w-[50%] pr-4">
                <Image 
                src={bgkids}
                alt={"bg-kids"}
                />
                {/* <img src="https://www.filimo.com/assets/web/ui/img-L9r8reMpjELY3rdNzVYQ/campaigns/nosub-v_new/bg-kids.png" alt="kids"  /> */}
            </div>
        </div>
    )
}
export default ChildrenWorld;