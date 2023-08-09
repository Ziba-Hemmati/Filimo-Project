import Link from "next/link";

const NotFound = () => {
  return (
    <div className={"text-white text-center"}>
      <h2 className="mt-48 mb-14">فکر می‌کنیم راهتون رو گم کرده‌اید!</h2>
      <Link href={"/"}>
        <button className="outline outline-orange-300 p-2 rounded-sm bg-gray-200 bg-opacity-[.4] hover:text-black hover:bg-orange-300 transition-colors duration-300 text-sm">
          بازگشت به خانه
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
