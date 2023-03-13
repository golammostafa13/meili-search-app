import React from "react";
import DashBoardItems from "./DashBoardItems";
import { MeiliSearch } from "meilisearch";
import { data } from "../data";

const DashBoard = ({ darkToggle, data }) => {
//   const client = new MeiliSearch({
//     host: "https://ms-53c6a4f8d1e7-2575.lon.meilisearch.io",
//     apiKey: "c40fe61d6b0787b2761da41b2643b925837e2ec2",
//   });
//   client
//     .index("data")
//     .addDocuments(data)
    // .then((res) => console.log(res)) 

  return (
    <div
      className={`w-full h-fit -z-10 ${
        darkToggle ? "dark:bg-gray-900" : "bg-gray-50"
      } flex items-center flex-col dark:bg-gray-700`}
      id="scroll-board"
    >
      <DashBoardItems data={data} />
    </div>
  );
};

export default DashBoard;
