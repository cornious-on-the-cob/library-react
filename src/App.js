import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Books from "./components/Books";
import { books } from "./data";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/books" exact render={() => <Books books={books}/>}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
