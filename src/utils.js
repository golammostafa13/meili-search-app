export const privateData = {
  hostUrl: "https://ms-fc410514e466-2575.nyc.meilisearch.io",
  apiKey: "2a3cd916ca2937189fd9f0ecf1d25d4b93193d95",
  datasetName: "customs-sros",
};

export function convertCamelCaseToWords(camelCaseString) {
    const words = camelCaseString.split(/(?=[A-Z])/);
    
    const separatedWords = words.map(word => word.toLowerCase()).join(' ');
    
    return separatedWords;
  }
  