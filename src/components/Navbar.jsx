import React from "react";
import "./nav-foot.scss";
import { Link } from "react-router-dom";
import  { Breakpoint, BreakpointProvider } from 'react-socks';


export default function Navbar() {
  return (
    <div>
      <nav className="Navbar">
        <Link to="/" className="logo">
          <i className="logo"></i> <span>SAKAMZAT</span>
        </Link>
       
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
        </ul>
        <Link to="/contact" className="contact">
          CONTACT
        </Link>
      </nav>
    </div>
  );
}
