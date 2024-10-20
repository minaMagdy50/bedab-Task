import React, { useState } from 'react';
import image1 from "../assets/gallery/meal-1.jpg";
import image2 from "../assets/gallery/meal-2.jpg";
import image3 from "../assets/gallery/meal-3.jpg";
import image4 from "../assets/gallery/meal-4.jpg";
import image5 from "../assets/gallery/meal-5.jpg";
import image6 from "../assets/gallery/meal-6.jpg";
import image7 from "../assets/gallery/meal-7.jpg";

const ImageGallery = () => {
  const images = [
    image1,
    image4,
    image2,
    image7,
    image3,
    image5,
    image6,
  ];

  const getColumns = (images, numberOfColumns) => {
    const columns = Array.from({ length: numberOfColumns }, () => []);
    images.forEach((image, index) => {
      columns[index % numberOfColumns].push(image);
    });
    return columns;
  };

  const columns = getColumns(images, 3);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handleNext = (e) => {
    e.stopPropagation()
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = (e) => {
    e.stopPropagation()
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeLightbox(e);
    } else if (e.key === "ArrowRight") {
      handleNext(e);
    } else if (e.key === "ArrowLeft") {
      handlePrev(e);
    }
  };

  return (
    <>
      <div className="gallery-container">
        {/* Image Gallery */}
        <div className="photogallery">
          {columns.map((column, colIndex) => (
            <div className="column" key={colIndex}>
              {column.map((image, imgIndex) => {
                const globalIndex = colIndex + imgIndex * 3;
                return (
                  <div className="thumbnail" key={globalIndex}>
                    <img
                      src={image}
                      loading='lazy'
                      alt={`Image ${globalIndex}`}
                      onClick={() => openLightbox(globalIndex)}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {isOpen && (
          <div className="lightbox" onClick={closeLightbox} onKeyDown={handleKeyDown} tabIndex={0}>
            <div className="lightbox-content" onClick={(e) => closeLightbox()}>
              <button className="close" onClick={closeLightbox}>
                X
              </button>
              <img src={images[currentIndex]} alt={`Image ${currentIndex}`} className="lightbox-image" />
              <button className="prev" onClick={handlePrev}>
                &#10094;
              </button>
              <button className="next" onClick={handleNext}>
                &#10095;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageGallery;
