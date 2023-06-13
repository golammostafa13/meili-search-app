export const privateData = {
  hostUrl: "https://ms-fc410514e466-2575.nyc.meilisearch.io",
  apiKey: "2a3cd916ca2937189fd9f0ecf1d25d4b93193d95",
  datasetName: "customs-sros",
};

export const appVariable = {
  contentWords: 50
}

export const truncateDescription = (content, searchTerm, maxLength) => {
  const words = content.split(" ");
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