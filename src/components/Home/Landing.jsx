import React from "react";
import { Link } from "react-router-dom";


export default function Landing() {
  return (
    <div className="landing">
      <div className="info-container">
        <div className="info">
          <h1>
            A Haven <span>of fresh cut</span> flowers, fruits , apples and dates...
          </h1>
          <p>
            We have a wide variety of Fresh Cut Flowers from Kenya Ranging from Roses to Gypsophillia and also herb. We also work with well-established and mostly sought after farms, for their quality products. This makes us have a massive production base which is able to meet large supply demand and any volume and quantities that you need.
          </p>
          <Link className="read-btn" to="/about">ABOUT</Link>
          <Link className="service-btn" to="/services">Our Services</Link>
        </div>
      </div>
    </div>
  );
}
