import React, { useState } from 'react';
import love1 from '../assets/love1.jpg';
import love2 from '../assets/love2.jpg';
import love3 from '../assets/love3.jpg';
import love4 from '../assets/love4.jpg';
import FrontPage from './FrontPage'; 
import '../index.css';

function MyGalleryPage() {
  const [zoomedImage, setZoomedImage] = useState(null);
  const [showFrontPage, setShowFrontPage] = useState(false);

  const images = [love1, love2, love3, love4];

  const handleImageClick = (src) => {
    setZoomedImage(src);
  };

  const handleZoomedClose = () => {
    setZoomedImage(null);
  };

  const handleBackButtonClick = () => {
    setShowFrontPage(true); 
  };

  const goToGallery = () => {
    setShowFrontPage(false); 
  };

  if (showFrontPage) {
    return <FrontPage goToGallery={goToGallery} />; 
  }

  return (
    <div className="gallery-page">
      <button className="back-button" onClick={handleBackButtonClick}>Back</button>
      <h1 className="gallery-title" style={{ textAlign: 'center' }}>My Love</h1> 
      <div className="gallery-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Love ${index + 1}`}
            onClick={() => handleImageClick(image)}
            className="zoomable-image"
          />
        ))}
      </div>
      {zoomedImage && (
        <div className="zoomed-image-container" onClick={handleZoomedClose}>
          <img src={zoomedImage} alt="Zoomed Image" className="zoomed-image" />
        </div>
      )}
    </div>
  );
}

export default MyGalleryPage;
