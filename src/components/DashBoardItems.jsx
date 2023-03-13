import React from "react";
import { data } from "../data";
import DashBoardItem from "./DashBoardItem";
import LoaderButton from "./LoaderButton";

const DashBoardItems = () => {
  return (
    <div className="w-full h-full flex flex-col items-center dark:text-white">
      {data.map((item) => (
        <DashBoardItem key={item.id} item={item} />
      ))}

      <LoaderButton />
    </div>
  );
};

export default DashBoardItems;
