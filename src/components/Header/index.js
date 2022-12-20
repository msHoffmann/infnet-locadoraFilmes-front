import React from "react";
import "./Header.css";
import logo from "../../images/locadora.png";
import profile from "../../images/profile.png";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="headerLogo">
        <a href="/">
          <img src={logo} alt="Locadora de Filmes" />
        </a>
      </div>
      <div className="profileIcon">
        <a href="/">
          <img src={profile} alt="Profile Icon" />
        </a>
      </div>
    </header>
  );
};
