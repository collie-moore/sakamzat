import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <div className="info-container">
        <div className="info">
          <h1>
            Doing <span>the right thing, at the</span> right time.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dicta?
            Aut, doloremque. Sed, laborum? Molestiae magni beatae consectetur
            mollitia nemo sunt dolore et non, ducimus itaque! Provident itaque
            eum quo. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Similique, impedit.
          </p>
          <a href="#read" className="read-btn">
            READ MORE
          </a>
          <a href="#services" className="service-btn">
          <Link to="/Solutions.home">SERVICES</Link>
          </a>
        </div>
        <div className="picture">
          <img
            src="../images/banner.jpg"
            alt="person"
          />
        </div>
      </div>
    </div>
  );
}
