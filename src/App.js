import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Books from "./components/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
   setCart([...cart, book])
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />}
        />
        <Route path="/cart" exact render={() => <Cart books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
