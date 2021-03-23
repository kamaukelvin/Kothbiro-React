import React from "react";
import "./navbar.css";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <h4 className="navbar__title">
        KOTHBIRO <span className="navbar__subtitle">2020/2021</span>
        <div className="navbar__rule" />
      </h4>

      <div>
        <img className="nav__logo" src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
