// FrontPage.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

const FrontPage = ({ goToGallery }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
    document.body.classList.toggle("light-mode", isDarkMode);
  };

  return (
    <div className={`container ${isDarkMode ? "dark-mode" : ""}`}>
      <h1 className="title">Love Captured: A Gallery of Moments</h1>
      <button className="button" onClick={goToGallery}>
        View Gallery
      </button>
      <button className="dark-mode-button" onClick={toggleDarkMode}>
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          className="dark-mode-icon"
        />
      </button>
    </div>
  );
};

FrontPage.propTypes = {
  goToGallery: PropTypes.func.isRequired,
};

export default FrontPage;
