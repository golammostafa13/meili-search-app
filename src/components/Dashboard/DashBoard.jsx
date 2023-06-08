import React from "react";
import DashBoardItems from "./DashBoardItems";

const DashBoard = ({ darkToggle, data }) => {

  return (
    <div
      className={`w-full h-full -z-10 ${
        darkToggle ? "dark:bg-gray-900" : "bg-gray-50"
      } flex items-center flex-col dark:bg-gray-700`}
      id="scroll-board"
      style={{ paddingTop: "100px" }}

    >
      <DashBoardItems data={data} />
    </div>
  );
};

export default DashBoard;
