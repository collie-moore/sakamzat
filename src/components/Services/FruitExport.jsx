import React from "react";

export default function News_home() {
  return (
    <div className="news">
       <br>
      </br>
      <h1 className="title">Fruits</h1>
      <hr />
      <p className="lead">
        The following are the fruits that we export
      </p>
      <ul className="cards">
      <li>
          <img
            src="https://cdn.pixabay.com/photo/2014/02/27/17/51/grapes-276070_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Grapes</a>
          </div>
          <hr />
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2018/07/03/10/47/berries-3513547_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Berries</a>
          </div>
          <hr />
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2014/06/19/16/55/currants-372627_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Currants</a>
          </div>
          <hr />
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2018/07/12/16/59/raspberry-3533909_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Raspberries</a>
          </div>
          <hr />
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2016/03/09/09/19/blueberries-1245724_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Blueberries</a>
          </div>
          <hr />
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2014/11/29/17/54/currant-550600_960_720.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Currant Fruits</a>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}
