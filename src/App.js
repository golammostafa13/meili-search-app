import { useEffect, useState } from "react";
import DashBoard from "./components/Dashboard/DashBoard";
import Navbar from "./components/Navbar/Navbar";
import ScrollButton from "./components/ui/ScrollButton";
import { privateData } from "./utils";
import { client } from "./services/client";
import Loader from "./components/ui/Loader";

function App() {
  const [darkToggle, setDarkToggle] = useState(false);
  const [data, setData] = useState([]);
  const [hits, setHits] = useState(0);
  const [time, setTime] = useState(0);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    client
      .index(privateData.datasetName)
      .search(searchValue, {limit: limit})
      .then((res) => {
        setHits(res.estimatedTotalHits);
        setTime(res.processingTimeMs);
        setData(res.hits);
        setLoading(false);
      });
  }, [limit, searchValue]);

  let content = null;
  if (loading) {
    content = (
      <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
        <Loader />
        <Loader />
        <Loader />
        <p>Loading...</p>
      </div>
    );
  } else if (data?.length === 0) {
    content = (
      <div className="w-full h-screen flex items-center justify-center">
        No Data Available!
      </div>
    );
  } else {
    content = <DashBoard darkToggle={darkToggle} data={data} limit={limit} setLimit={setLimit} />;
  }

  return (
    <div
      className={`w-full h-full overflow-x-hidden overflow-y-visible ${
        darkToggle && "dark"
      }`}
    >
      <Navbar
        setData={setData}
        setHits={setHits}
        setTime={setTime}
        hits={hits}
        time={time}
        darkToggle={darkToggle}
        setDarkToggle={setDarkToggle}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        setLimit={setLimit}
      />
      {content}
      <ScrollButton />
    </div>
  );
}

export default App;
