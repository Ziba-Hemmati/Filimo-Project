import Items from "../items/Items";
const text1 = "هزاران فیلم و سریال خارجی (دوبله و زیرنویس)";
const text2 = "هزاران انیمیشن و کارتون برای کودکان";
const text3 = "پشتیبانی 24 ساعته برای راهنمایی شما";

const Footer = () => {
  return (
    <div className=" bg-green-900 w-full flex items-center justify-center text-center ">
      <div className="flex flex-col items-center">
        <img
          src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/logo_text.png"
          alt="logo-filimo"
          className="mb-14 mt-8 md:mt-16"
        />
        <Items text1={text1} text2={text2} text3={text3} />
      </div>
    </div>
  );
};

export default Footer;
