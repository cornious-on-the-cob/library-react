import './index.css';
import Landing from './components/Landing';
import Highlights from './components/Highlights';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
    </div>
  );
}

export default App;
