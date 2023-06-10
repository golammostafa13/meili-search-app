import MeiliSearch from "meilisearch";
import { privateData } from "../utils";

export const client = new MeiliSearch({
    host: privateData.hostUrl,
    apiKey: privateData.apiKey,
  });