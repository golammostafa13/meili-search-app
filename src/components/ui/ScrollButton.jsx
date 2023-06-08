import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollButton = () => {
  const handleScrollToTop = () => {
    const element = document.getElementById("scroll-board");
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed right-8 bottom-6 h-10 w-10 rounded-full bg-slate-600 text-3xl flex justify-center items-center cursor-pointer hover:text-yellow-500 transition-all duration-700 text-white"
      onClick={handleScrollToTop}
    >
      <AiOutlineArrowUp />
    </div>
  );
};

export default ScrollButton;
