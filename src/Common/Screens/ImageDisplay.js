import React from "react";

import "../CSS/ImagesDisplay.css";

const ImageDisplay = () => {
  const images = [
    "assetstwo/gallery/gallery2.jpeg",
    "assetstwo/gallery/gallery1.jpeg",
    "assetstwo/gallery/gallery3.jpeg",
    "assetstwo/gallery/gallery4.jpeg",
    "assetstwo/gallery/gallery5.jpeg",
    "assetstwo/gallery/gallery6.jpeg",
    "assetstwo/gallery/gallery7.jpeg",
    "assetstwo/gallery/gallery8.jpeg",
    "assetstwo/gallery/gallery9.jpeg",
    "assetstwo/gallery/gallery10.jpeg",
    "assetstwo/gallery/gallery11.jpeg",
    "assetstwo/gallery/gallery12.jpeg",
    "assetstwo/gallery/gallery13.jpeg",
    "assetstwo/gallery/gallery14.jpeg",
    "assetstwo/gallery/gallery15.jpeg",
    "assetstwo/gallery/gallery16.jpeg",
    "assetstwo/gallery/gallery17.jpeg",
  ];
  return (
    <div className="gallery-classname-main">
      <div className="title-main">
        <h3
          style={{
            color: "#ff6600",
            fontFamily: "'Merienda One', cursive",
          }}
        >
          Gallery Lists
        </h3>

        <img
          src="assetstwo/backgroundimages/titleunderline-removebg.png"
          alt="not found"
          width={180}
        />
      </div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`Image ${index + 1}`} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDisplay;
