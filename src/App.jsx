// App.jsx
import React, { useState } from 'react';
import FrontPage from './components/FrontPage';
import Gallery from './components/Gallery';

const App = () => {
  const [showGallery, setShowGallery] = useState(false);

  const goToGallery = () => {
    setShowGallery(true);
  };

  return (
    <div>
      {!showGallery ? (
        <FrontPage goToGallery={goToGallery} />
      ) : (
        <Gallery />
      )}
    </div>
  );
};

export default App;
