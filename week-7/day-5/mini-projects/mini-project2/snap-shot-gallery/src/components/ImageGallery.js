import React from "react";
import "./ImageGallery.css";

function ImageGallery({ images }) {
  return (
    <div className="gallery">
      {images.map((img) => (
        <div className="img-container" key={img.id}>
          <img src={img.src.medium} alt={img.alt} />
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
