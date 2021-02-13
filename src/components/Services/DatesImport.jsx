import React from "react";

export default function News_home() {
  return (
    <div className="news">
       <br>
      </br>
      <h1 className="title">Dates and Apples</h1>
      <hr />
      <p className="lead">
        The following are the flowers that we export
      </p>
      <ul className="cards">
      <li>
          <img
            src="https://cdn.pixabay.com/photo/2016/08/18/14/30/dates-1603127_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Medjool</a>
          </div>
          <hr />
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/25/19/06/date-palm-1859060_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Dactilifera</a>
          </div>
          <hr />
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2011/03/16/16/25/dates-5404_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Palm</a>
          </div>
          <hr />
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2014/03/30/13/01/rose-301406_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Flower 1</a>
          </div>
          <hr />
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2014/03/30/13/01/rose-301406_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Flower 1</a>
          </div>
          <hr />
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2014/03/30/13/01/rose-301406_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Flower 1</a>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}
