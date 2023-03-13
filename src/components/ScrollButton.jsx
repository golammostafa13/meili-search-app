import React, { createRef, useEffect, useRef } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollButton = () => {
  const handleScrollToTop = () => {
    const element = document.getElementById("scroll-board");
    if (element) {
      console.log(element);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed right-24 bottom-10 h-12 w-12 rounded-full bg-slate-600 text-3xl flex justify-center items-center cursor-pointer hover:bg-inherit hover:text-yellow-500 transition-all duration-700 text-white"
      onClick={handleScrollToTop}
    >
      <AiOutlineArrowUp />
    </div>
  );
};

export default ScrollButton;
