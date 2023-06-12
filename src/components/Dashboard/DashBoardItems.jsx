import React from "react";
import DashBoardItem from "./DashBoardItem";

const DashBoardItems = ({data, searchTerm}) => {
  return (
    <div className="w-full h-full flex flex-col items-center dark:text-white mb-6">
      {data?.length > 0 && data.map((item) => (
        <DashBoardItem key={item.id} item={item} searchTerm={searchTerm} />
      ))}
    </div>
  );
};

export default DashBoardItems;
