import Items from "../../Items";

const Footer = () => {
  return (
    <div className="h-[350px] bg-green-900 w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img
          src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/logo_text.png"
          alt="logo-filimo"
          className="mb-14 md:mt-16"
        />
        <div className="flex flex-col items-center lg:flex-row lg:items-center">
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
