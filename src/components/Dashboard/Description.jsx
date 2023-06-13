import React from "react";
import { appVariable, truncateDescription } from "../../utils";

const Description = ({ item, searchTerm }) => {
  const { sroNumber, publishDate, content, description } = item || {};
  let contentDesc = truncateDescription(content, searchTerm, appVariable.contentWords)
  return (
    <div className="lg:w-2/3  md:w-full flex flex-col gap-2 p-3 md:text-base sm:text-xs md:overflow-y-auto">
      <div className="flex w-full border-b py-1">
        <p className="w-1/3 font-medium">Sro Number</p>
        <p className="w-2/3">{sroNumber}</p>
      </div>
      <div className="flex w-full border-b py-1">
        <p className="w-1/3 font-medium">Date</p>
        <p className="w-2/3">{publishDate}</p>
      </div>
      <div className="flex w-full border-b py-1">
        <p className="w-1/3 font-medium">Description</p>
        <p className="w-2/3">{description}</p>
      </div>
      <div className="flex sm:min-h-[100px] h-full w-full items-start justify-center py-2 lg:overflow-hidden md:overflow-y-auto">
        <p className="w-full">{ contentDesc }</p>
      </div>
    </div>
  );
};

export default Description;

