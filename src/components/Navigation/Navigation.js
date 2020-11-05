import React from "react";
import "./Navigation.css";

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navbar-homepage">
      <nav className="navi-bar">
        <div className="title">
          <a href="/">WasteNothing</a>
        </div>

        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/signUp">Sign up</Link>
            </li>
            <li>
              <Link to="/logIn">Log in</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
