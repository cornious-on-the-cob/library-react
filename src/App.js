import "./index.css"; 
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Nav from "./components/Nav";
import Featured from "./components/Featured";
import Discounted from "./components/Discounted";
import Explore from "./components/Explore";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </div>
  );
}

export default App;
