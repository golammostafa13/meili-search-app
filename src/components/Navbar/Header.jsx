import React from "react";
import { TbTargetArrow, TbTilde } from "react-icons/tb";
import {MdWatchLater} from "react-icons/md";

const Header = ({hits, time}) => {
  return (
    <div className="flex w-1/3 h-20 items-center justify-center">
      <div className="flex flex-col mr-28 justify-center">
        <div className="flex items-center gap-2 mb-2 text-indigo-800 font-light text-sm dark:text-white">
          <TbTargetArrow />
          <span>Hits</span>
        </div>
        <div className="flex items-center gap-2 dark:text-red-500">
          <TbTilde />
          <span className="text-xl text-red-500">{hits}</span>
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2 text-indigo-800 font-light text-sm dark:text-white">
            <MdWatchLater />
            <span>Time spent</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl text-red-500">{time} ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
