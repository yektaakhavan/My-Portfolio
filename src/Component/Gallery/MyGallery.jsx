import { useEffect, useState, useRef } from "react";

// این کامپوننت یک سکشن ثابت روی صفحه نیست؛ فقط وقتی کاربر روی دکمه‌ی
// "Show Images" یک پروژه کلیک می‌کنه، به‌صورت لایت‌باکس باز می‌شه.
function MyGallery({ images, onClose }) {
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
  const baseSize = useRef({ w: 0, h: 0 });

  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const DRAG_SPEED = 0.9;
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const hasImages = images && images.length > 0;

  useEffect(() => {
    if (hasImages) {
      setLightboxIndex(0);
      setZoom(1);
      setOffset({ x: 0, y: 0 });
      setIsZoomed(false);
      setIsZooming(false);
    } else {
      setLightboxIndex(null);
    }
  }, [images]);

  useEffect(() => {
    document.body.classList.toggle("lightbox-active", lightboxIndex !== null);
    return () => {
      if (zoomTimeout.current) clearTimeout(zoomTimeout.current);
    };
  }, [lightboxIndex]);

  const closeLightbox = () => {
    if (isDragging.current) return;
    setLightboxIndex(null);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setIsZoomed(false);
    setIsZooming(false);
    document.body.classList.remove("lightbox-active");
    if (onClose) onClose();
  };

  const showPrev = (e) => {
    if (e) e.stopPropagation();
    if (isZoomed || isZooming) return;
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setIsZoomed(false);
  };

  const showNext = (e) => {
    if (e) e.stopPropagation();
    if (isZoomed || isZooming) return;
    setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setIsZoomed(false);
  };

  const zoomIn = (e) => {
    e.stopPropagation();
    const newZoom = +(zoom + 0.2).toFixed(2);
    setZoom(newZoom);
    setIsZoomed(newZoom > 1);
    clampOffset(offset, newZoom);
  };

  const zoomOut = (e) => {
    e.stopPropagation();
    const newZoom = +(zoom > 0.4 ? zoom - 0.2 : zoom).toFixed(2);
    setZoom(newZoom);
    setIsZoomed(newZoom > 1);
    clampOffset(offset, newZoom);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    if (!isZoomed) return;
    isDragging.current = true;
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !isZoomed) return;
    const dx = (e.clientX - startPos.current.x) * DRAG_SPEED;
    const dy = (e.clientY - startPos.current.y) * DRAG_SPEED;
    startPos.current = { x: e.clientX, y: e.clientY };
    setOffset((prev) => clampOffset({ x: prev.x + dx, y: prev.y + dy }, zoom));
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isZoomed, zoom]);

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.1 : -0.1;
    const newZoom = Math.max(0.4, +(zoom + delta).toFixed(2));
    setZoom(newZoom);
    setIsZoomed(newZoom > 1);
    clampOffset(offset, newZoom);
  };

  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  function clampOffset(nextOffset, usedZoom = zoom) {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return nextOffset;

    const cRect = container.getBoundingClientRect();
    const baseW = baseSize.current.w || img.getBoundingClientRect().width / usedZoom;
    const baseH = baseSize.current.h || img.getBoundingClientRect().height / usedZoom;

    const scaledW = baseW * usedZoom;
    const scaledH = baseH * usedZoom;

    const maxOffsetX = Math.max(0, (scaledW - cRect.width) / 2);
    const maxOffsetY = Math.max(0, (scaledH - cRect.height) / 2);

    const clamped = {
      x: clamp(nextOffset.x, -maxOffsetX, maxOffsetX),
      y: clamp(nextOffset.y, -maxOffsetY, maxOffsetY),
    };

    setOffset(clamped);
    return clamped;
  }

  const handleTouchStart = (e) => {
    if (!imgRef.current || !containerRef.current) return;

    if (e.touches.length === 1) {
      const t = e.touches[0];
      touchStart.current = t.clientX;
      if (isZoomed) {
        isDragging.current = true;
        startPos.current = { x: t.clientX, y: t.clientY };
      }
    } else if (e.touches.length === 2) {
      setIsZooming(true);
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      pinchStart.current = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
    }
  };

  const handleTouchMove = (e) => {
    if (!imgRef.current || !containerRef.current) return;

    if (e.touches.length === 2) {
      e.preventDefault();
      setIsZooming(true);
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const distance = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);

      if (!pinchStart.current) pinchStart.current = distance;
      else {
        const diff = distance - pinchStart.current;
        const newZoom = Math.max(0.4, +(zoom + diff * 0.005).toFixed(2));
        setZoom(newZoom);
        setIsZoomed(newZoom > 1);
        pinchStart.current = distance;
        clampOffset(offset, newZoom);
      }
    } else if (e.touches.length === 1) {
      const t = e.touches[0];
      if (isDragging.current && isZoomed) {
        e.preventDefault();
        const dx = (t.clientX - startPos.current.x) * DRAG_SPEED;
        const dy = (t.clientY - startPos.current.y) * DRAG_SPEED;
        startPos.current = { x: t.clientX, y: t.clientY };
        setOffset((prev) => clampOffset({ x: prev.x + dx, y: prev.y + dy }));
      }
    }
  };

  const handleTouchEnd = (e) => {
    if (isZooming) {
      if (zoomTimeout.current) clearTimeout(zoomTimeout.current);
      zoomTimeout.current = setTimeout(() => setIsZooming(false), 250);
      pinchStart.current = null;
    }

    if (isDragging.current) {
      isDragging.current = false;
      return;
    }

    if (!touchStart.current) return;

    const now = Date.now();
    if (now - lastTouchEnd.current < 250) {
      lastTouchEnd.current = now;
      touchStart.current = null;
      return;
    }

    const touchEndX = e.changedTouches?.[0]?.clientX ?? null;
    if (touchEndX == null) {
      touchStart.current = null;
      return;
    }

    const diff = touchStart.current - touchEndX;
    if (diff > 50) showNext(e);
    else if (diff < -50) showPrev(e);

    touchStart.current = null;
    lastTouchEnd.current = now;
  };

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
        setOffset({ x: 0, y: 0 });
      }
    }
    lastTouchEnd.current = now;
  };

  const handleImageLoad = () => {
    if (!imgRef.current || !containerRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    baseSize.current = { w: rect.width, h: rect.height };
  };

  if (lightboxIndex === null || !hasImages) return null;

  const navBtnBase =
    "absolute top-1/2 z-[10001] flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-5xl text-gold backdrop-blur-md transition hover:scale-110 hover:bg-black/70 hover:text-white";

  return (
    <div
      className="fixed inset-0 z-[9999] flex touch-none select-none items-center justify-center bg-black/90"
      onClick={closeLightbox}
      style={{ cursor: isZoomed ? "grab" : "auto" }}
    >
      <div ref={containerRef} className="relative flex h-full w-full items-center justify-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            closeLightbox();
          }}
          aria-label="Close gallery"
          className="absolute right-6 top-5 z-[10000] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-black/50 text-4xl text-gold backdrop-blur-md transition hover:scale-110 hover:bg-black/70"
        >
          &times;
        </button>

        <button
          aria-label="Previous image"
          onClick={showPrev}
          className={`left-5 ${navBtnBase} ${isZoomed || isZooming ? "pointer-events-none opacity-30" : ""}`}
        >
          &#10094;
        </button>
        <button
          aria-label="Next image"
          onClick={showNext}
          className={`right-5 ${navBtnBase} ${isZoomed || isZooming ? "pointer-events-none opacity-30" : ""}`}
        >
          &#10095;
        </button>

        <img
          ref={imgRef}
          src={images[lightboxIndex].src}
          alt={images[lightboxIndex].alt}
          onLoad={handleImageLoad}
          className="max-h-[90%] max-w-[90%] rounded-xl shadow-[0_0_20px_var(--color-gold)] [will-change:transform]"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            cursor: zoom > 1 ? "grab" : "auto",
            touchAction: isMobile ? "none" : "auto",
          }}
          onMouseDown={handleMouseDown}
          onWheel={handleWheel}
          onTouchStart={(e) => {
            handleTouchStart(e);
            handleDoubleTap(e);
          }}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onDoubleClick={(e) => {
            e.preventDefault();
            if (zoom === 1) {
              setZoom(2);
              setIsZoomed(true);
            } else {
              setZoom(1);
              setIsZoomed(false);
              setOffset({ x: 0, y: 0 });
            }
          }}
        />

        {!isMobile && (
          <div className="absolute bottom-8 z-[10001] flex gap-4">
            <button
              onClick={zoomIn}
              className="rounded-lg bg-gold px-4 py-2 text-xl font-bold text-ink transition hover:scale-110 hover:bg-[#c9b26e]"
            >
              +
            </button>
            <button
              onClick={zoomOut}
              className="rounded-lg bg-gold px-4 py-2 text-xl font-bold text-ink transition hover:scale-110 hover:bg-[#c9b26e]"
            >
              -
            </button>
          </div>
        )}

        {isMobile && isZoomed && (
          <div className="absolute bottom-5 left-1/2 z-[10001] -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-xs text-white backdrop-blur-md">
            Pinch to zoom • Double tap to reset
          </div>
        )}

        {images.length > 1 && (
          <div className="absolute top-5 left-1/2 z-[10001] -translate-x-1/2 rounded-full bg-black/50 px-4 py-1.5 text-sm font-semibold text-gold backdrop-blur-md">
            {lightboxIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyGallery;
