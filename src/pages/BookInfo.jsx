import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";

export default function BookInfo({ books }) {
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
                  src=""
                  alt="Book Img"
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">Book Title</h2>
                <Rating rating="4.5" />
              </div>
              <div className="book__selected--price">
                <Price />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
