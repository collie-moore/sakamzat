import React from "react";
import "./nav-foot.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="Navbar">
        <Link to="/" className="logo">
          <i className=""></i> <span>SAKAMZAT</span>
        </Link>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="drop">
            <span>
              SERVICES <i className="fas fa-sort-down icon"></i>
            </span>
            <ul>
              <li>
                <a href="/FlowersExport">Flowers Export</a>
              </li>
              <li>
                <a href="FruitExport">Fruits Export</a>
              </li>
              <li>
                <a href="DatesImport">Dates Import</a>
              </li>
              <li>
                <a href="AppleImport">Apples Import</a>
              </li>
            </ul>
          </li>
        </ul>
        <Link to="/contact" className="contact">
          CONTACT
        </Link>
      </nav>
    </div>
  );
}
