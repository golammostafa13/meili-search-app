import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const ToggleDayNightButton = ({darkToggle, setDarkToggle}) => {
  const handleToggle = () => {
    setDarkToggle((prev) => !prev);
  };

  return (
    <div
      className={`flex h-9 w-10 rounded-full bg-slate-600 text-3xl justify-center items-center cursor-pointer transition-all duration-700 text-white z-100 mr-8 ${
        darkToggle ? "hover:text-red-500" : "hover:text-yellow-500"
      }`}
      onClick={handleToggle}
    >
      {darkToggle ? <BsFillSunFill size={16} /> : <BsFillMoonStarsFill size={16} />}
    </div>
  );
};

export default ToggleDayNightButton;
