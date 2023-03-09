import React from "react";
import { TbTargetArrow, TbTilde } from "react-icons/tb";
import {MdWatchLater} from "react-icons/md";

const Header = () => {
  return (
    <div className="flex w-[50%] h-20 mt-4 items-center">
      <div className="flex flex-col mr-28">
        <div className="flex items-center gap-3 mb-2 text-indigo-800 font-light text-sm">
          <TbTargetArrow />
          <span>Hits</span>
        </div>
        <div className="flex items-center gap-3">
          <TbTilde />
          <span className="text-xl text-red-500">405</span>
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-2 text-indigo-800 font-light text-sm">
            <MdWatchLater />
            <span>Time spent</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl text-red-500">4 ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
