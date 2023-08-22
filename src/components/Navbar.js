import React from "react";
import "../stylesheets/Navbar.css";
import logoReact from "../img/logo192.png";
import "../stylesheets/logo-react.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <a href="/">
            Calculadora{" "}
            <img
              className="logo-react"
              src={logoReact}
              alt="logo de react animado"
            />{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
