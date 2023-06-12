import React from "react";
import { convertCamelCaseToWords } from "../../utils";

const Description = ({ item, searchTerm }) => {
  const { id, url, poster, ...descItem } = item || {};

  const truncateDescription = (description, searchTerm, maxLength) => {
    const words = description.split(" ");
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const searchIndex = words.findIndex(
      (word) => word.toLowerCase() === lowerCaseSearchTerm
    );
    if (searchIndex === -1 || !searchTerm) {
      return "";
    }

    let startIndex = Math.max(0, searchIndex - Math.floor(maxLength / 2));
    let endIndex = Math.min(startIndex + maxLength, words.length);

    if (startIndex > 0) {
      words[startIndex] = "... " + words[startIndex];
    }
    if (endIndex < words.length) {
      words[endIndex - 1] += " ...";
    }

    const truncatedWords = words.slice(startIndex, endIndex);
    const highlightedWords = truncatedWords.map((word, index) => {
      if (word === searchTerm) {
        return (
          <span key={index} className="rounded-md font-bold text-sm">
            {word}{" "}
          </span>
        );
      } else {
        return (
          <span key={index} className="p-1">
            {word}{" "}
          </span>
        );
      }
    });
    return highlightedWords;
  };

  return (
    <div className="w-2/3 max-h-[400px]">
      {Object.keys(descItem).map((title, idx) => {
        const formattedTitle = convertCamelCaseToWords(title);
        if (title === "content") {
          const content = truncateDescription(item[title], searchTerm, 60);
          return (
            <div
              key={idx}
              className="flex w-full border-b-0 p-3 dark:border-gray-700"
            >
              <div className="w-1/3 font-light text-sm uppercase flex justify-start items-start">
                {formattedTitle}
              </div>
              <div className="w-2/3 text-sm font-mono dark:text-gray-50 break-words md:text-xs mx-auto">
                {content}
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={idx}
              className="flex w-full p-3 dark:border-gray-700 border-b-2"
            >
              <div className="w-1/3 font-light text-sm uppercase flex justify-start items-start">
                {formattedTitle}
              </div>
              <div className="w-2/3 text-sm font-mono dark:text-gray-50 break-words md:text-xs mx-auto">
                {item[title]}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Description;
