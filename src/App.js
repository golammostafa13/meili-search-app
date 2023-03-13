import { useState } from "react";
import DashBoard from "./components/DashBoard";
import Navbar from "./components/Navbar";
import ScrollButton from "./components/ScrollButton";
import ToggleDayNightButton from "./components/ToggleDayNightButton";

function App() {
  const [darkToggle, setDarkToggle] = useState(false);
  const [data, setData] = useState([]);

  return (
    <div className={`w-screen h-screen overflow-auto ${darkToggle && "dark"}`}>
      <Navbar setData={setData}/>
      <DashBoard darkToggle={darkToggle} data={data} />
      <ScrollButton />
      <ToggleDayNightButton darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
    </div>
  );
}

export default App;
