import React from "react";

export default function News_home() {
  return (
    <div className="news">
       <br>
      </br>
      <h1 className="title">Flowers</h1>
      <hr />
      <p className="lead">
      Sakamzat Company is renowned for delivering Flowers in Middle East, Japan and most recently Russia.
We guarantee you premium fresh cut flowers with a head size of 5+cm, and 6cm and also 4.5cm.
What you as our client choose is what we avail to you

      </p>
      <ul className="cards">
      <li>
          <img
            src="https://cdn.pixabay.com/photo/2020/03/22/13/00/rose-4957083_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Gypsophilla</a>
          </div>
          <hr />
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2020/07/11/20/04/phlox-5395207_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Phlox</a>
          </div>
          <hr />
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2020/05/21/15/41/sweet-william-5201391_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Dianthus</a>
          </div>
          <hr />
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2016/05/28/21/49/honorary-award-1422174_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Veronica</a>
          </div>
          <hr />
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2019/08/11/20/10/st-johns-wort-4399828_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Hypericum</a>
          </div>
          <hr />
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2020/07/10/15/17/spotted-st-johns-wort-5390989_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Hypericum</a>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}
