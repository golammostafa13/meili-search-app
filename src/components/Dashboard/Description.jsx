import React from "react";
import { convertCamelCaseToWords } from "../../utils";

const Description = ({ item }) => {
  const { id, ...descItem } = item || {};

  return (
    <div className="w-2/3 max-h-[400px] overflow-y-auto">
      {Object.keys(descItem).map((title, idx) => {
        const formattedTitle = convertCamelCaseToWords(title);
        return (
        <div
          key={idx}
          className={`flex w-full p-3 dark:border-gray-700 border-b-2
          }`}
        >
          <div className="w-1/3 font-light text-sm uppercase flex justify-start items-start">
            {formattedTitle}
          </div>
          <div className="w-2/3 text-sm font-mono dark:text-gray-50 break-words md:text-xs mx-auto">
            {item[title]}
          </div>
        </div>
      )})}
    </div>
  );
};

export default Description;
