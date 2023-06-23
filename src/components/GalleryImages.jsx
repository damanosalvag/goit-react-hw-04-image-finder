import React, { useEffect } from "react";

const GalleryImages = ({ children, render }) => {
  useEffect(() => {
    if (render === true) {
      const gallery = document.querySelector(".gallery");
      const galleryHeight = gallery.offsetHeight;
      const toHeight = galleryHeight + 120;

      setTimeout(
        () =>
          window.scrollTo({
            top: toHeight,
            left: 0,
            behavior: "smooth",
          }),
        500
      );
    }
  });
  return <section className="gallery">{children}</section>;
};

export default GalleryImages;
