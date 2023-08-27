import Button from "./Button";
import Image from "next/image";
import TV from "@/assets/images/TV.webp";
import TVBG from "@/assets/images/TVBG.webp";
import TVBGyaghi from "@/assets/images/TVBG-yaghi.webp";
import Title from "@/components/Title";
import androidTV from "@/assets/images/androidTV.webp";
const HowWatch = () => {
  return (
    <div className="py-16 bg-black-900 px-[10px]">
      <div className=" relative left-0  w-100 ml-10">
        <Image 
           src={TVBG}
           alt={"TVBG"}
           className="absolute left-0  md:w-[600px] lg:w-[700px] xl:w[850px] hidden md:block"
        />
        {/* <img
          className="absolute left-0  md:w-[600px] lg:w-[700px] xl:w[850px] hidden md:block"
          src="https://www.filimo.com/assets/web/ui/img-L9r8reMpjELY3rdNzVYQ/campaigns/nosub-v_new/TVBG.png"
          alt=""
        /> */}
      </div>
      <div className="relative sm:px-5 xl:px-[100px]">
        <div className="text-white mb-6">
          <Title>چطور با تلویزیون، فیلیمو تماشا کنم؟</Title>
        </div>
        <div className="text-gray-200 mb-3 pb-4 text-[.7rem] leading-6 sm:max-w-sm">
          <p>
            ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را
            فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که می‌توانید
            از لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون شما سازگار
            است را انتخاب کنید.
          </p>
        </div>
        <div className="w-100  md:hidden">
          <Image 
             src={TVBGyaghi}
             alt={"TVBG-yaghi"}
          />
          {/* <img
            src="https://www.filimo.com/assets/web/ui/img-L9r8reMpjELY3rdNzVYQ/campaigns/nosub-v_new/TVBG-yaghi.png"
            alt="TVBG-yaghi"
          /> */}
        </div>
        <div className="">
          <div className="flex mt-4">
            <div className="w-100 ml-3">
              <Image 
                src={TV}
                alt={"TV"}
                width={30}
              />
              {/* <img
                src="https://www.filimo.com/assets/web/ui/img-L9r8reMpjELY3rdNzVYQ/campaigns/nosub-v_new/TV.png"
                alt="TV"
                width={30}
              /> */}
            </div>
            <div className="">
              <div className=" text-gray-200 font-iran-sans-medium font-bold mb-4 text-sm">
                <p>تلویزیون</p>
              </div>
              <div className="text-gray-300 mb-8 text-[.7rem] ">
                <p>
                  Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV
                  devices - Samsung
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-100 ml-3 ">
              <Image 
                src={androidTV}
                alt={"androidTV"}
                width={30}
              />
              {/* <img
                src="	https://www.filimo.com/assets/web/ui/img-L9r8reMpjELY3rdNzVYQ/campaigns/nosub-v_new/androidTV.png"
                alt="androidTV"
                width={30}
              /> */}
            </div>
            <div>
              <div className="text-gray-200 font-iran-sans-medium font-bold mb-4 text-base">
                <p>اندروید تی‌وی</p>
              </div>
              <div className="text-gray-300 mb-16 text-[.7rem]">
                <p>
                  NVIDIA - amazon - xiaomi - minix - skystream - turewell -
                  ematic - humax - matricom
                </p>
              </div>
            </div>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};
export default HowWatch;
