import Buttons from "./Button";
import Description from "./Description";
const ChildrenWorld = () => {
  return (
    <div className="px-2.5 bg-gradient-to-tr from-black-950 via-black-900 to-blue-800 md:flex flex-row-reverse xl:px-24 lg:pt-8">
      <div className="md:max-w-[42%] md:m-14  xl:max-w-[50%] xl:mt-[7rem] ">
        <Description />
        <div>
          <Buttons>فیلیمو کودک بساز</Buttons>
          <Buttons>تماشای فیلیمو کودک</Buttons>
        </div>
      </div>
      <div className="flex items-center justify-center w-[90%] md:mr-12 md:max-[47%] xl:mr-[8rem] xl:max-w-[50%]">
        <img src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/bg-kids.png" />
      </div>
    </div>
  );
};
export default ChildrenWorld;
