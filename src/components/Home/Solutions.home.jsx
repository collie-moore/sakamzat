import React from "react";
import { Link } from "react-router-dom";

export default function Solutions_home() {
  return (
    <div className="solutions">
      <h1 className="title">Meet Our Solutions For You</h1>
      <hr />
      <p className="lead">
        Lorem ipsum dolor, sit amet consectet et adipis icing elit. Ab commodi
        iure minus laboriosam placeat quia, dolorem animi. Eveniet repudiandae,
        iure et.
      </p>
      <ul className="cards">
        <li>
          <h1>
            <i className="fas fa-fan"></i>
          </h1>
          <Link to="/FlowersExport">Flowers Export</Link>
          <p>
            Sakamzat Company is renowned for delivering Flowers in Middle East, Japan and most recently Russia.
            We guarantee you premium fresh cut flowers with a head size of 5+cm, and 6cm and also 4.5cm.
            What you as our client choose is what we avail to you

          </p>
        </li>
        <li>
          <h1>
            <i className="fas fa-apple-alt"></i>
          </h1>
          <Link to="/FruitExport">Fruits Export</Link>
          <p>
            Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret
            quas saepe autem, dolor set.
          </p>
        </li>

        <li>
          <h1>
            <i className="fas fa-apple-alt"></i>
          </h1>
          <Link to="/DatesImport">Apple & Dates Imports</Link>
          <p>
            Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret
            quas saepe autem, dolor set.
          </p>
        </li>
      </ul>
    </div>
  );
}
