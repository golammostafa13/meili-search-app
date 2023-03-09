import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollButton = () => {
  const handleScrollToTop = () => {
    console.log('hi')
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      
      className="fixed right-24 bottom-10 h-12 w-12 rounded-full bg-slate-600 text-3xl flex justify-center items-center cursor-pointer hover:bg-indigo-500 transition-all duration-700 text-white z-100"
      onClick={handleScrollToTop}
    >
      <AiOutlineArrowUp />
    </div>
  );
};

export default ScrollButton;
