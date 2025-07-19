import React from "react";
import UndrawImage from "../assets/Undraw_Books.svg"


export default function Landing() {
  return (
    <div>
      <section id="landing">
        <header>
          <div className="header__container">
            <div className="header__description">
              <h1>The United States most Awarded Library Platform</h1>
              <h2>Find Your Dream Book with <span className="purple">Library</span></h2>
              <a href="#features">
                <button className="btn">Browse Books</button>
              </a>
            </div>
            <figure className="header__img--wrapper">
                <img src={UndrawImage} alt="" />
            </figure>
          </div>
        </header>
      </section>
    </div>
  );
}
