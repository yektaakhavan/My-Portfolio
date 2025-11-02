import React, { useEffect, useState, useRef } from "react";
import "../../Component/Gallery/MyGallery.css";
import AuthorPort1 from "../../assets/images/projectImage/AuthorPortfolio/home-page.webp";
import Coffee2 from "../../assets/images/projectImage/CoffeeListing/CoffeeListing (2).webp";
import ToDoApp1 from "../../assets/images/projectImage/ToDoApp/ToDoApp (2).webp";
import trackingdash1 from "../../assets/images/projectImage/Time-tracking-dashboard/Time-tracking-dashboard.webp";
import articlepreview1 from "../../assets/images/projectImage/article-preview-component-master/article-preview-component-master.webp";
import blogpreview1 from "../../assets/images/projectImage/blog-preview-card-main/blog-preview-card-main.webp";
import fourcardfeature1 from "../../assets/images/projectImage/four-card-feature-section-master/four-card-feature-section-master.webp";
import productpreview1 from "../../assets/images/projectImage/product-preview-card-component-main/product-preview-card-component-main.webp";
import qrcode1 from "../../assets/images/projectImage/qr-code-component-main/qr-code-component-main.webp";
import recipepage1 from "../../assets/images/projectImage/recipe-page-main/recipe-page-main.webp";
import simpleToDoApp1 from "../../assets/images/projectImage/simple-ToDoApp/ToDoApp.webp";
import sociallinks1 from "../../assets/images/projectImage/social-links-profile-main/social-links-profile-main.webp";
import testimonialsgrid1 from "../../assets/images/projectImage/testimonials-grid-section-main/testimonials-grid-section-main.webp";
import TypeTestSpeed1 from "../../assets/images/projectImage/Type-Test-Speed/Type-Test-Speed.webp";
import WeatherApp1 from "../../assets/images/projectImage/Weather-App/Weather-App.webp";

function MyGallery({ images, resetGallery }) {
  const [displayImages, setDisplayImages] = useState([]);
  const [showAllButton, setShowAllButton] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  const startPos = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const pinchStart = useRef(null);
  const touchStart = useRef(null);
  const lastTouchEnd = useRef(0);
  const zoomTimeout = useRef(null);

  const DRAG_SPEED = 0.3;
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.classList.add("lightbox-active");
    } else {
      document.body.classList.remove("lightbox-active");
    }

    return () => {
      if (zoomTimeout.current) {
        clearTimeout(zoomTimeout.current);
      }
    };
  }, [lightboxIndex]);

  const defaultImages = [
    { src: AuthorPort1, alt: "Project 1 Image 1" },
    { src: fourcardfeature1, alt: "Project 7 Image 1" },
    { src: testimonialsgrid1, alt: "Project 13 Image 1" },
    { src: qrcode1, alt: "Project 9 Image 1" },
    { src: articlepreview1, alt: "Project 5 Image 1" },
    { src: TypeTestSpeed1, alt: "Project 14 Image 1" },
    { src: productpreview1, alt: "Project 8 Image 1" },
    { src: recipepage1, alt: "Project 10 Image 1" },
    { src: ToDoApp1, alt: "Project 3 Image 1" },
    { src: blogpreview1, alt: "Project 6 Image 1" },
    { src: WeatherApp1, alt: "Project 15 Image 1" },
    { src: Coffee2, alt: "Project 2 Image 2" },
    { src: trackingdash1, alt: "Project 4 Image 1" },
    { src: simpleToDoApp1, alt: "Project 11 Image 1" },
    { src: sociallinks1, alt: "Project 12 Image 1" },
  ];

  useEffect(() => {
    if (images && images.length > 0) {
      setDisplayImages(images);
      setShowAllButton(true);
    } else {
      setDisplayImages(defaultImages);
      setShowAllButton(false);
    }
  }, [images]);

  const handleShowAll = () => {
    setDisplayImages(defaultImages);
    setShowAllButton(false);
    if (resetGallery) resetGallery();
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setIsZoomed(false);
    setIsZooming(false);
    document.body.classList.add("lightbox-active");
  };

  const closeLightbox = () => {
    if (!isDragging.current) {
      setLightboxIndex(null);
      setZoom(1);
      setOffset({ x: 0, y: 0 });
      setIsZoomed(false);
      setIsZooming(false);
      document.body.classList.remove("lightbox-active");
    }
  };

  const showPrev = (e) => {
    if (e) e.stopPropagation();
    if (isZoomed || isZooming) return;
    setLightboxIndex((prev) =>
      prev > 0 ? prev - 1 : displayImages.length - 1
    );
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setIsZoomed(false);
  };

  const showNext = (e) => {
    if (e) e.stopPropagation();
    if (isZoomed || isZooming) return;
    setLightboxIndex((prev) =>
      prev < displayImages.length - 1 ? prev + 1 : 0
    );
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setIsZoomed(false);
  };

  const zoomIn = (e) => {
    e.stopPropagation();
    const newZoom = zoom + 0.2;
    setZoom(newZoom);
    setIsZoomed(newZoom > 1);
  };

  const zoomOut = (e) => {
    e.stopPropagation();
    const newZoom = zoom > 0.4 ? zoom - 0.2 : zoom;
    setZoom(newZoom);
    setIsZoomed(newZoom > 1);
  };

  // Drag handlers
  const handleMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !isZoomed) return;

    const dx = (e.clientX - startPos.current.x) * DRAG_SPEED;
    const dy = (e.clientY - startPos.current.y) * DRAG_SPEED;

    setOffset((prev) => ({
      x: prev.x + dx,
      y: prev.y + dy,
    }));

    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Wheel zoom desktop
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.2 : -0.2;
    const newZoom = Math.max(0.4, zoom + delta);
    setZoom(newZoom);
    setIsZoomed(newZoom > 1);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      touchStart.current = e.touches[0].clientX;
    } else if (e.touches.length === 2) {
      setIsZooming(true);
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      pinchStart.current = distance;
    }
  };

  const handleTouchEnd = (e) => {
    if (isZooming) {
      // Reset zooming state after a short delay
      if (zoomTimeout.current) {
        clearTimeout(zoomTimeout.current);
      }
      zoomTimeout.current = setTimeout(() => {
        setIsZooming(false);
      }, 300);

      touchStart.current = null;
      return;
    }

    if (!touchStart.current) return;

    const now = Date.now();
    if (now - lastTouchEnd.current < 300) {
      lastTouchEnd.current = now;
      return;
    }
    lastTouchEnd.current = now;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStart.current - touchEndX;

    if (diff > 50) showNext(e);
    else if (diff < -50) showPrev(e);

    touchStart.current = null;
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      setIsZooming(true);
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );

      if (!pinchStart.current) {
        pinchStart.current = distance;
      } else {
        const diff = distance - pinchStart.current;
        const newZoom = Math.max(0.4, zoom + diff * 0.005);
        setZoom(newZoom);
        setIsZoomed(newZoom > 1);
        pinchStart.current = distance;
      }
    }
  };

  const handleTouchEndMobile = (e) => {
    if (e.touches.length < 2) {
      pinchStart.current = null;
    }
  };

  // Double tap for zoom
  const handleDoubleTap = (e) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastTouchEnd.current < 300) {
      if (zoom === 1) {
        setZoom(2);
        setIsZoomed(true);
      } else {
        setZoom(1);
        setIsZoomed(false);
      }
    }
    lastTouchEnd.current = now;
  };

  return (
    <section id="gallery">
      <h2 className="section-title">Gallery</h2>

      <div className="gallery-grid" id="gallery-content">
        {displayImages.map((img, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => openLightbox(index)}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchEnd={(e) => {
            handleTouchEnd(e);
            handleTouchEndMobile(e);
          }}
          style={{ cursor: isZoomed ? "grab" : "auto" }}
        >
          <span
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
              setZoom(1);
              setOffset({ x: 0, y: 0 });
              setIsZoomed(false);
              setIsZooming(false);
              document.body.classList.remove("lightbox-active");
            }}
          >
            &times;
          </span>

          <span
            className={`prev-btn ${isZoomed || isZooming ? "disabled" : ""}`}
            onClick={showPrev}
          >
            &#10094;
          </span>
          <span
            className={`next-btn ${isZoomed || isZooming ? "disabled" : ""}`}
            onClick={showNext}
          >
            &#10095;
          </span>

          <img
            src={displayImages[lightboxIndex].src}
            alt={displayImages[lightboxIndex].alt}
            className="lightbox-image"
            style={{
              transform: `scale(${zoom}) translate(${offset.x}px, ${offset.y}px)`,
              cursor: zoom > 1 ? "grab" : "auto",
            }}
            onMouseDown={handleMouseDown}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEndMobile}
            onDoubleClick={handleDoubleTap}
            onTouchEndCapture={handleDoubleTap}
          />

          {/* Zoom controls only on desktop */}
          {!isMobile && (
            <div className="zoom-controls">
              <button onClick={zoomIn}>+</button>
              <button onClick={zoomOut}>-</button>
            </div>
          )}

          {/* Zoom indicator for mobile */}
          {isMobile && isZoomed && (
            <div className="zoom-indicator">
              <span>Pinch to zoom • Double tap to reset</span>
            </div>
          )}
        </div>
      )}

      {showAllButton && (
        <div style={{ textAlign: "left", marginTop: "1rem" }}>
          <button className="btn-show-all" onClick={handleShowAll}>
            Show All Project Images
          </button>
        </div>
      )}
    </section>
  );
}

export default MyGallery;
