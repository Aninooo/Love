import React from "react";
import PropTypes from "prop-types";
import "../index.css";

const FrontPage = ({ goToGallery }) => {
  return (
    <div className="container">
      <h1 className="title">Love Captured: A Gallery of Moments</h1>
      <button className="button" onClick={goToGallery}>
        View Gallery
      </button>
    </div>
  );
};

FrontPage.propTypes = {
  goToGallery: PropTypes.func.isRequired,
};

export default FrontPage;
