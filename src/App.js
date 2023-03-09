import DashBoard from "./components/DashBoard";
import Navbar from "./components/Navbar";
import ScrollButton from "./components/ScrollButton";

function App() {
  return (
    <div className="w-screen h-screen overflow-auto">
      <Navbar />
      <DashBoard />
      <ScrollButton />
    </div>
  );
}

export default App;
