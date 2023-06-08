import React from "react";
import DashBoardItem from "./DashBoardItem";
import LoaderButton from "./LoaderButton";

const DashBoardItems = ({data}) => {
  return (
    <div className="w-full h-full flex flex-col items-center dark:text-white mb-6">
      {data?.length > 0 && data.map((item) => (
        <DashBoardItem key={item.id} item={item} />
      ))}
      {/* <LoaderButton /> */}
    </div>
  );
};

export default DashBoardItems;
