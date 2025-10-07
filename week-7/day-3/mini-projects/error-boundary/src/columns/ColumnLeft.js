import React, { useState } from "react";

function ColumnLeft() {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const res = await fetch("https://picsum.photos/v2/list?limit=2");
      const data = await res.json();
      setImages(data);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  return (
    <div className="container text-center">
      <button className="btn btn-primary my-3" onClick={getImages}>
        Get images
      </button>

      {images.map((img) => (
        <img
          key={img.id}
          src={img.download_url}
          alt="random"
          style={{ width: "100%", marginTop: "10px", borderRadius: "10px" }}
        />
      ))}
    </div>
  );
}

export default ColumnLeft;
