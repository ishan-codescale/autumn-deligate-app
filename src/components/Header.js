import React from "react";
import "../App.css";

function Header() {
  return (
    <div className="navbar">
      <h1>OurLogo</h1>
      <ul class="nav">
        <li>
          <a href="">Register</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
