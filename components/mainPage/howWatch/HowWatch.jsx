
const HowWatch = () =>{
    return(
        <div className="py-16 bg-black-900 ">
            <div className=" relative left-0  w-100 ">
                <img className="absolute left-0 md:w-[500px] lg:w-[600px] xl:w[750px] hidden md:block" src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/TVBG.png" alt="" />
            </div>
            <div className="relative px-3 sm:px-24">
                <div className="text-white text-base font-iran-sans mb-6">
                    <h2>
                        چطور با تلویزیون، فیلیمو تماشا کنم؟
                    </h2>
                </div>
                <div className="text-gray-200 mb-3 pb-4 text-[.7rem] leading-6 sm:max-w-sm">
                    <p>
                        ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را فراهم کردیم.
                        هرکدام از این 6 روش یک ویدیو آموزشی دارند که می‌توانید از لینک زیر، 
                        آن‌ها را تماشا کنید و روشی که با تلویزیون شما سازگار است را انتخاب کنید.
                    </p>
                </div>
                <div className="w-100  md:hidden">
                    <img src="	https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/TVBG-yaghi.png" alt="" />
                </div>
                <div className="">
                    <div className="flex mt-4">
                        <div className="w-100 ml-3">
                            <img src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/TV.png"  width={36}/>
                        </div>
                        <div className="">
                            <div className=" text-gray-200 font-iran-sans-medium font-medium mb-4 text-sm">
                                <p>تلویزیون</p>
                            </div>
                            <div className="text-gray-300 mb-8 text-[.7rem] text-sm">
                                <p>Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV devices - Samsung</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-100 ml-3 ">
                            <img src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/androidTV.png"  width={36}/>
                        </div>
                        <div>
                            <div className="text-gray-200 font-iran-sans-medium font-medium mb-4 text-sm">
                                <p>اندروید تی‌وی</p>
                            </div>
                            <div className="text-gray-300 mb-8 text-[.7rem]">
                                <p>NVIDIA - amazon - xiaomi - minix - skystream - turewell - ematic - humax - matricom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HowWatch;