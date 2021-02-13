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
<<<<<<< HEAD
          <Link to="/FlowersExport">Flowers Export</Link>
          <p>
            Sakamzat Company is renowned for delivering Flowers in Middle East, Japan and most recently Russia.
            We guarantee you premium fresh cut flowers with a head size of 5+cm, and 6cm and also 4.5cm.
            What you as our client choose is what we avail to you
=======
          <a href="FlowersExport">Flowers Export</a>
          <p>
          Sakamzat Company is renowned for delivering Flowers in Middle East, Japan and most recently Russia.
We guarantee you premium fresh cut flowers with a head size of 5+cm, and 6cm and also 4.5cm.
What you as our client choose is what we avail to you
>>>>>>> 4af133ce73eeaa9cf97271dad11e166434a12705

          </p>
        </li>
        <li>
          <h1>
            <i className="fas fa-apple-alt"></i>
          </h1>
<<<<<<< HEAD
          <Link to="/FruitExport">Fruits Export</Link>
=======
          <a href="FruitExport">Fruits Export</a>
>>>>>>> 4af133ce73eeaa9cf97271dad11e166434a12705
          <p>
            Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret
            quas saepe autem, dolor set.
          </p>
        </li>
<<<<<<< HEAD

=======
        
>>>>>>> 4af133ce73eeaa9cf97271dad11e166434a12705
        <li>
          <h1>
            <i className="fas fa-apple-alt"></i>
          </h1>
<<<<<<< HEAD
          <Link to="/DatesImport">Apple & Dates Imports</Link>
=======
          <a href="DatesImport">Dates Import</a>
>>>>>>> 4af133ce73eeaa9cf97271dad11e166434a12705
          <p>
            Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret
            quas saepe autem, dolor set.
          </p>
        </li>
      </ul>
    </div>
  );
}
