import { useState } from "react";
import DashBoard from "./components/DashBoard";
import Navbar from "./components/Navbar";
import ScrollButton from "./components/ScrollButton";
import ToggleDayNightButton from "./components/ToggleDayNightButton";

function App() {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div className={`w-screen h-screen overflow-auto ${darkToggle && "dark"}`}>
      <Navbar />
      <DashBoard darkToggle={darkToggle} />
      <ScrollButton />
      <ToggleDayNightButton darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
    </div>
  );
}

export default App;
