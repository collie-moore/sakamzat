import React from "react";


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
          <a href="/about" className="read-btn">
            READ MORE
          </a>
          <a href="/services" className="service-btn">
        Services          </a>
        </div>
       
      </div>
    </div>
  );
}
