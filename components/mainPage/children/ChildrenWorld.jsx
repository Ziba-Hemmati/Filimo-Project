
const ChildrenWorld = () =>{
    return(
        <div className="px-2.5 pt-8 bg-gradient-to-tr from-black-950 via-black-900 to-blue-800 md:flex flex-row-reverse xl:px-24"> 
            <div className="md:max-w-[47%] md:m-14 xl:max-w-[47%] xl:mt-[7rem]">
                <div className="text-white text-iran-sans-medium pb-6 text-xl">
                    <p>دنیایی متنوع از فیلم و کارتون‌های کودکانه</p>
                </div>
                <div className="text-gray-300 text-sm pb-8">
                    <p>ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.</p>
                </div>
                <button className="py-[.6rem] px-4 text-[.7rem] m-3 mb-8 rounded-lg bg-gray-200 fond-bold transition delay-150  ease-in-out hover:bg-gray-300 font-iran-sans-medium">فیلیمو کودک بساز</button>
                <button className="py-[.6rem] px-4 text-[.7rem] rounded-lg bg-gray-200 transition delay-150  ease-in-out hover:bg-gray-300 font-iran-sans-medium fond-bold">تماشای فیلیمو کودک</button>
            </div>
            <div className="flex items-center justify-center w-[90%] md:mr-12 md:max-[47%] xl:mr-[8rem] xl:max-w-[50%]">
                <img src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/campaigns/nosub-v_new/bg-kids.png"  />
            </div>
        </div>
    )
}
export default ChildrenWorld;
