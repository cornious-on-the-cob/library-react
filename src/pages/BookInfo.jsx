import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Book from "../components/ui/Book";

export default function BookInfo({ books, addToCart, cart }) {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookInCart() {
    return cart.find(book => book.id === +id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Books
              </Link>
            </div>

            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={book.url}
                  alt="Book Img"
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    This would be the summary for the book but there is no
                    summary in my data
                  </p>
                  {bookInCart() ? (
                    <Link to={`/cart`}>
                      <button className="btn">View Cart</button>
                    </Link>
                  ) : (
                    <button className="btn" onClick={() => addBookToCart(book)}>
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="books__container">
        <div className="row">
          <div className="book__selected--top">
            <h2 className="book__selected--title--top">Recommended Books</h2>
          </div>
          <div className="books">
            {books
              .filter((book) => +book.id !== +id)
              .slice(0, 4)
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
