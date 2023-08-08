"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className=" text-white text-center">
      <h2 className="text-lg mt-48">خطایی رخ داده است!</h2>
      <p className="my-14">{error.message}</p>
      <button
        onClick={() => reset()}
        className="outline outline-orange-300 p-2 rounded-sm bg-gray-200 bg-opacity-[.4] hover:text-black hover:bg-orange-300 transition-colors duration-300 text-sm"
      >
        دوباره سعی کنید
      </button>
    </div>
  );
}
