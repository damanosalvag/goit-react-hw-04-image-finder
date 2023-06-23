import React from "react";

const GalleryImagesItem = ({ image, alt, onUrl, onModal }) => {
  return (
    <figure>
      <img
        src={image}
        alt={alt}
        className="item"
        onClick={() => {
          onUrl(image);
          onModal(true);
        }}
      />
    </figure>
  );
};

export default GalleryImagesItem;
