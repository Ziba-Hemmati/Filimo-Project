const WatchMovie = () =>{
    return(
        <div className="py-16 px-1.5 sm:px-28 md:flex flex-col">
            <div className="md:flex flex-col">
                <h3 className="text-white pb-4 font-iran-sans-medium">
                    تماشای فیلیمو با همه دستگاه‌ها
                </h3>
            </div>
            <div>
                <p className="text-gray-200 leading-6 font-iran-sans text-sm ">
                    می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل، تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.
                </p>
            </div>
            <div className="mt-8 mb-6">
                <img src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/device2.png" alt="device2" className="w-full h-100"/>
            </div>
            <div className="flex mb-6 ">
                <div>
                    <img src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/laptop.png" width={30}/>
                </div>
                <div className="mr-4 leading-3">
                    <div>
                        <p className="text-gray-200 font-iran-sans text-sm">کامپیوتر و لبتاپ </p>
                    </div>
                    <div>
                        <p className="text-gray-300 text-xs mt-3 ">windows PC - MacOs - Chorom Os</p>
                    </div>
                </div>
            </div>
            <div className="flex mb-6 ">
                <div className="w-10 mr-0.5">
                    <img src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/mobile.png"  />
                </div>
                <div className="mr-3">
                    <div>
                        <p className="text-gray-200 font-iran-sans text-sm">موبایل و تبلت </p>
                    </div>
                    <div>
                        <p className="text-gray-300 text-xs mt-3">Android Phone & Tablets - Iphone and Ipad - Amazon Fire Tablets</p>
                    </div>
                </div>
            </div>
            <div className="flex mb-7">
                <div>
                    <img src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/game.png" />
                </div>
                <div className="mr-4 leading-3">
                    <div>
                        <p className="text-gray-200 font-iran-sans text-sm ">کنسول های بازی (Browser)</p>
                    </div>
                    <div>
                        <p className="text-gray-300 text-xs mt-3">Xbox Series S - Xbox Seris X - PS۵ - PS۴</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default WatchMovie