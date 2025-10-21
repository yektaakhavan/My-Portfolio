import React, { useEffect, useState, useRef } from "react";
import "../../Component/Gallery/MyGallery.css";
import Coffee2 from "../../assets/images/projectImage/CoffeeListing/CoffeeListing (2).png";
import ToDoApp1 from "../../assets/images/projectImage/ToDoApp/ToDoApp (2).png";
import AuthorPort1 from "../../assets/images/projectImage/AuthorPortfolio/home-page.png";
import trackingdash1 from "../../assets/images/projectImage/Time-tracking-dashboard/Time-tracking-dashboard.png";
import articlepreview1 from "../../assets/images/projectImage/article preview component master/article preview component master.jpg";
import blogpreview1 from "../../assets/images/projectImage/blog preview card main/blog preview card main.jpg";
import fourcardfeature1 from "../../assets/images/projectImage/four card feature section master/four card feature section master.jpg";
import productpreview1 from "../../assets/images/projectImage/product preview card component main/product preview card component main.jpg";
import qrcode1 from "../../assets/images/projectImage/qr code component main/qr code component main.jpg";
import recipepage1 from "../../assets/images/projectImage/recipe page main/recipe page main.jpg";
import simpleToDoApp1 from "../../assets/images/projectImage/simple-ToDoApp/ToDoApp.png";
import sociallinks1 from "../../assets/images/projectImage/social links profile main/social links profile main.jpg";
import testimonialsgrid1 from "../../assets/images/projectImage/testimonials grid section main/testimonials grid section main.jpg";
import TypeTestSpeed1 from "../../assets/images/projectImage/Type Test Speed/Type Test Speed.png";
import WeatherApp1 from "../../assets/images/projectImage/Weather-App/Weather-App.png";

function MyGallery({ images, resetGallery }) {
  const [displayImages, setDisplayImages] = useState([]);
  const [showAllButton, setShowAllButton] = useState(false); // حالت دکمه
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDraggingFlag, setIsDraggingFlag] = useState(false);

  const startPos = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  const DRAG_SPEED = 0.3; // ضریب سرعت درگ (کوچکتر = حرکت آرام‌تر)

  const defaultImages = [
    { src: AuthorPort1, alt: "Project 3 Image 1" },
    { src: Coffee2, alt: "Project 1 Image 2" },
    { src: ToDoApp1, alt: "Project 2 Image 1" },
    { src: trackingdash1, alt: "Project 4 Image 1" },
    { src: articlepreview1, alt: "Project 5 Image 1" },
    { src: blogpreview1, alt: "Project 6 Image 1" },
    { src: fourcardfeature1, alt: "Project 7 Image 1" },
    { src: productpreview1, alt: "Project 8 Image 1" },
    { src: qrcode1, alt: "Project 9 Image 1" },
    { src: recipepage1, alt: "Project 10 Image 1" },
    { src: simpleToDoApp1, alt: "Project 11 Image 1" },
    { src: sociallinks1, alt: "Project 12 Image 1" },
    { src: testimonialsgrid1, alt: "Project 13 Image 1" },
    { src: TypeTestSpeed1, alt: "Project 14 Image 1" },
    { src: WeatherApp1, alt: "Project 15 Image 1" },
  ];

  useEffect(() => {
    if (images && images.length > 0) {
      setDisplayImages(images);
      setShowAllButton(true); // وقتی روی Show Images پروژه کلیک شد، دکمه نمایش داده شود
    } else {
      setDisplayImages(defaultImages);
      setShowAllButton(false); // حالت پیش‌فرض، دکمه نمایش داده نشود
    }
  }, [images]);

  const handleShowAll = () => {
    setDisplayImages(defaultImages);
    setShowAllButton(false); // بعد از نمایش همه، دکمه دوباره مخفی شود
    if (resetGallery) resetGallery(); // اگر نیاز به ریست شدن parent داری
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const closeLightbox = () => {
    if (!isDraggingFlag) {
      setLightboxIndex(null);
      setZoom(1);
      setOffset({ x: 0, y: 0 });
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev > 0 ? prev - 1 : displayImages.length - 1
    );
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev < displayImages.length - 1 ? prev + 1 : 0
    );
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const zoomIn = (e) => {
    e.stopPropagation();
    setZoom((prev) => prev + 0.2);
  };

  const zoomOut = (e) => {
    e.stopPropagation();
    setZoom((prev) => (prev > 0.4 ? prev - 0.2 : prev));
  };

  // Drag handlers
  const handleMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
    setIsDraggingFlag(false);
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const dx = (e.clientX - startPos.current.x) * DRAG_SPEED;
    const dy = (e.clientY - startPos.current.y) * DRAG_SPEED;

    setOffset((prev) => ({
      x: prev.x + dx,
      y: prev.y + dy,
    }));

    startPos.current = { x: e.clientX, y: e.clientY };
    setIsDraggingFlag(true);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Touch handlers for mobile swipe
  const touchStart = useRef(null);
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart.current - touchEnd;
    if (diff > 50) showNext(e);
    else if (diff < -50) showPrev(e);
    touchStart.current = null;
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
          onTouchEnd={handleTouchEnd}
        >
          {/* دکمه ضربدر – همیشه کار می‌کند */}
          <span
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
              setZoom(1);
              setOffset({ x: 0, y: 0 });
            }}
          >
            &times;
          </span>

          {/* فلش‌ها */}
          <span className="prev-btn" onClick={showPrev}>
            &#10094;
          </span>
          <span className="next-btn" onClick={showNext}>
            &#10095;
          </span>

          {/* تصویر با زوم و drag */}
          <img
            src={displayImages[lightboxIndex].src}
            alt={displayImages[lightboxIndex].alt}
            className="lightbox-image"
            style={{
              transform: `scale(${zoom}) translate(${offset.x}px, ${offset.y}px)`,
              cursor: zoom > 1 ? "grab" : "auto",
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          />

          {/* دکمه‌های زوم */}
          <div className="zoom-controls">
            <button onClick={zoomIn}>+</button>
            <button onClick={zoomOut}>-</button>
          </div>
        </div>
      )}
      {/* دکمه نمایش همه تصاویر */}
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
