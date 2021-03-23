import React from "react";
import "./backNavbar.css";
import { IoArrowBackOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const Navbar = ({ fn }) => {
  return (
    <div className="navbar">
      <div>
        <IoArrowBackOutline
          style={{ fontSize: "20px", marginBottom: "10px" }}
          onClick={fn}
        />
      </div>

      {/* <div>
        <IoIosFootball style={{ fontSize: "20px" }} />
      </div> */}
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  fn: PropTypes.func.isRequired,
};
