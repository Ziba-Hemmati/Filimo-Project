import Title from "@/components/Title"
const WatchMovie = () =>{
    return(
        <div className="py-16 px-[10px] sm:px-[5rem] md:flex ">
            <div className="mt-8 mb-6 hidden  md:inline">
                <img src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/deviceYaghi.png" alt="device2" className="w-full h-100"/>
            </div>
            <div className="md:pr-4 xl:mt-12">
            <div className="md:flex flex-col">
                <Title className="text-white pb-4 font-iran-sans-medium xl:font-iran-sans-medium">
                    تماشای فیلیمو با همه دستگاه‌ها
                </Title>
            </div>
            <div>
                <p className="text-gray-200 leading-6 font-iran-sans text-[.8rem] xl:text-sm lg:text-[.8rem] ">
                    می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل، تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.
                </p>
            </div>
            <div className="mt-8 mb-6 md:hidden">
                <img src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/device2.png" alt="device2" className="w-full h-100"/>
            </div>
            
            <div className="flex mb-8 md:mt-6">
                <div>
                    <img src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/laptop.png" alt="laptop" width={25}/>
                </div>
                <div className="mr-3 leading-3">
                    <div>
                        <p className="font-bold text-gray-200 font-iran-sans text-sm xl:font-iran-sans-medium">کامپیوتر و لب تاپ </p>
                    </div>
                    <div>
                        <p className="text-gray-300 text-xs mt-3 ">windows PC - MacOs - Chorom Os</p>
                    </div>
                </div>
            </div>
            <div className="flex mb-8 ">
                <div className="w-10">
                    <img src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/mobile.png" alt="mobile" width={20}/>
                </div>
                <div className=" leading-3 ">
                    <div>
                        <p className="font-bold text-gray-200 font-iran-sans text-sm xl:font-iran-sans-medium">موبایل و تبلت </p>
                    </div>
                    <div>
                        <p className="text-gray-300 text-xs mt-3">Android Phone & Tablets - Iphone and Ipad - Amazon Fire Tablets</p>
                    </div>
                </div>
            </div>
            <div className="flex mb-8">
                <div>
                    <img src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/game.png" alt="game" width={25} />
                </div>
                <div className="mr-3 leading-3">
                    <div>
                        <p className="font-bold text-gray-200 font-iran-sans text-sm xl:font-iran-sans-medium ">کنسول های بازی (Browser)</p>
                    </div>
                    <div>
                        <p className="text-gray-300 text-xs mt-3">Xbox Series S - Xbox Seris X - PS۵ - PS۴</p>
                    </div>
                </div>
            </div>
            </div>
                </div>
    )
    
}
export default WatchMovie