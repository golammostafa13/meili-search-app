import React from "react";
import DashBoardItems from "./DashBoardItems";

const DashBoard = ({ darkToggle, data, limit, setLimit, searchTerm }) => {
  const handleLoadMore = () => {
    setLimit((prev) => prev + 10);
  };

  return (
    <div
      className={`w-full h-full -z-10 ${
        darkToggle ? "dark:bg-gray-900" : "bg-gray-50"
      } flex items-center flex-col dark:bg-gray-700`}
      id="scroll-board"
      style={{ paddingTop: "80px" }}
    >
      <DashBoardItems data={data} searchTerm={searchTerm} />
      {limit <= data.length && (
        <button className=" mb-2 border-2 border-indigo-500 px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" onClick={handleLoadMore}>load more</button>
      )}
    </div>
  );
};

export default DashBoard;
