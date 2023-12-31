import Image from "next/image";
import Items from "../../Items";
import logoText from "@/assets/images/logo_text.webp"
const Footer = () => {
  return (
    <div className="h-[340px] bg-green-900 w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Image 
          src={logoText}
          alt={"logo_text"}
          className="my-12"
        />
        {/* <img
          src="	https://www.filimo.com/assets/web/ui/img-L9r8reMpjELY3rdNzVYQ/campaigns/nosub-v_new/logo_text.png"
          alt="logo-filimo"
          className="my-12"
        /> */}
        <div className="flex flex-col items-center lg:flex-row lg:items-center font-bold my-4 ">
          <Items className={"lg:pb-16 my-2 lg:ml-8"}>
            هزاران فیلم و سریال خارجی (دوبله و زیرنویس)
          </Items>
          <Items className={"lg:pb-16 my-2 lg:ml-8"}>
            هزاران انیمیشن و کارتون برای کودکان
          </Items>
          <Items className={"lg:pb-16 my-2 mb-10 lg:mb-0"}>
            پشتیبانی 24 ساعته برای راهنمایی شما
          </Items>
        </div>
      </div>
    </div>
  );
};

export default Footer;
