import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container"> 
        <div className="row">
          <h2 className="section__title">
            Why Choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="fa-solid fa-bolt-lightning" />}
              title="Quick and Easy"
              para="Get access to the book you purchased online instantly"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="fa-solid fa-book" />}
              title="10,000+ Books"
              para="Get access to the book you purchased online instantly"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="fa-solid fa-tags" />}
              title="Affordable"
              para="Get your hands on popular books for as little as $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
