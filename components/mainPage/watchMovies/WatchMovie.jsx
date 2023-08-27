import Image from "next/image";
import Title from "@/components/Title";
import device2 from "@/assets/images/device2.webp";
import deviceYaghi from "@/assets/images/deviceYaghi.webp";
import game from "@/assets/images/game.webp"
import laptop from "@/assets/images/laptop.webp";
import mobile from "@/assets/images/mobile.webp";
const WatchMovie = () =>{
    return(
        <div className="py-16 px-[10px] sm:px-[20px] xl:px-[100px] md:flex ">
            <div className="mt-8 mb-6 hidden  md:inline">
                <Image src={deviceYaghi} alt={"deviceYaghi"} className="w-full h-100"/>
                {/* <img src="	https://www.filimo.com/assets/web/ui/img-L9r8reMpjELY3rdNzVYQ/campaigns/nosub-v_new/deviceYaghi.png" alt="device2" className="w-full h-100"/> */}
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
                <Image src={device2} alt={"device2"} className="w-full h-100"/>
                {/* <img src="https://www.filimo.com/assets/web/ui/img-L9r8reMpjELY3rdNzVYQ/campaigns/nosub-v_new/device2.png" alt="device2" className="w-full h-100"/> */}
            </div>
            
            <div className="flex mb-8 md:mt-6">
                <div>
                    <Image src={laptop} alt={"laptop"} width={25}/>
                    {/* <img src="https://www.filimo.com/assets/web/ui/img-L9r8reMpjELY3rdNzVYQ/campaigns/nosub-v_new/laptop.png" alt="laptop" width={25}/> */}
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
                    <Image src={mobile} alt={"mobile"} width={20}/>
                    {/* <img src="https://www.filimo.com/assets/web/ui/img-L9r8reMpjELY3rdNzVYQ/campaigns/nosub-v_new/mobile.png" alt="mobile" width={20}/> */}
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
                    <Image src={game} alt={"game"} width={25}/>
                    {/* <img src="https://www.filimo.com/assets/web/ui/img-L9r8reMpjELY3rdNzVYQ/campaigns/nosub-v_new/game.png" alt="game" width={25} /> */}
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