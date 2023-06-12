import React from "react";
import Description from "./Description";

const DashBoardItem = ({ item, searchTerm }) => {
  const { poster, url } = item;

  return (
    <div className="h-fit w-[50%] bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 border border-indigo-500 my-2 shadow-lg flex dark:border-gray-700 dark:shadow-md dark:shadow-slate-800">
      <a href={url} className="w-1/3 flex items-center justify-center p-6 border-r-2 border-indigo-50 dark:border-gray-700" download="download.pdf" target="_blank" rel="noreferrer">
        <img
          className="border-2 border-gray-200 shadow-xl cursor-pointer hover:scale-105 transition-all duration-500 dark:border-white"
          src={poster}
          alt="poster"
        />
      </a>
      <Description item={item} searchTerm={searchTerm} />
    </div>
  );
};

export default DashBoardItem;
