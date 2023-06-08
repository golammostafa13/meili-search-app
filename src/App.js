import { useEffect, useState } from "react";
import DashBoard from "./components/Dashboard/DashBoard";
import Navbar from "./components/Navbar/Navbar";
import ScrollButton from "./components/ui/ScrollButton";
import MeiliSearch from "meilisearch";

function App() {
  const [darkToggle, setDarkToggle] = useState(false);
  const [data, setData] = useState([]);
  const [hits, setHits] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const client = new MeiliSearch({
      host: "https://ms-fc410514e466-2575.nyc.meilisearch.io",
      apiKey: "2a3cd916ca2937189fd9f0ecf1d25d4b93193d95",
    });
    client
      .index("new-dataset")
      .search("")
      .then((res) => {
        setHits(res.estimatedTotalHits);
        setTime(res.processingTimeMs);
        setData(res.hits);
      });
  }, []);

  return (
    <div className={`w-full h-full overflow-x-hidden overflow-y-visible ${darkToggle && "dark"}`}>
      <Navbar
        setData={setData}
        setHits={setHits}
        setTime={setTime}
        hits={hits}
        time={time}
        darkToggle={darkToggle}
        setDarkToggle={setDarkToggle}
      />
      <DashBoard darkToggle={darkToggle} data={data} />
      <ScrollButton />
    </div>
  );
}

export default App;
