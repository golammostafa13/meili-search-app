import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const ToggleDayNightButton = ({darkToggle, setDarkToggle}) => {
  const handleToggle = () => {
    setDarkToggle((prev) => !prev);
  };

  return (
    <div
      className={`fixed left-24 bottom-10 h-12 w-12 rounded-full bg-slate-600 hover:bg-gray-300 text-3xl flex justify-center items-center cursor-pointer hover:bg-transparent transition-all duration-700 text-white z-100 ${
        darkToggle ? "hover:text-red-500" : "hover:text-yellow-500"
      }`}
      onClick={handleToggle}
    >
      {darkToggle ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
    </div>
  );
};

export default ToggleDayNightButton;
