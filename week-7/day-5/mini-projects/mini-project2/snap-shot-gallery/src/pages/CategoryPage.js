import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from "../components/ImageGallery";

const API_KEY = "s8kG3KcR47x5acOOmqLcKUEPbsTEEDAbW86KxiGOpkw0N78BVnRfRKfd";

function CategoryPage({ category }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${category}&per_page=30`,
        { headers: { Authorization: API_KEY } }
      );
      setImages(response.data.photos);
    };
    fetchImages();
  }, [category]);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold capitalize my-4">
        {category} Pictures
      </h2>
      <ImageGallery images={images} />
    </div>
  );
}

export default CategoryPage;
