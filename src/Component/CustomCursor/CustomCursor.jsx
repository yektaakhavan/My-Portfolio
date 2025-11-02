import { useEffect, useState } from "react";

function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);

  // تشخیص دستگاه
  useEffect(() => {
    const checkDevice = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isLargeScreen = window.innerWidth > 1024;
      // فقط در دسکتاپ غیرلمسی نمایش بده
      return !isTouchDevice && isLargeScreen;
    };

    setIsDesktop(checkDevice());

    const handleResize = () => {
      setIsDesktop(checkDevice());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // موقعیت کرسر
  useEffect(() => {
    if (!isDesktop) return;

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isDesktop]);

  // بررسی وضعیت لایت‌باکس
  useEffect(() => {
    if (!isDesktop) return;

    const observer = new MutationObserver(() => {
      const isLightbox = document.body.classList.contains("lightbox-active");
      setVisible(!isLightbox);
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [isDesktop]);

  // اگر دسکتاپ نیست یا لایت‌باکس فعاله، نمایش داده نشه
  if (!isDesktop || !visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        fontSize: "28px",
        zIndex: 9999,
        filter:
          "drop-shadow(0 0 2px #b57edc) drop-shadow(0 0 4px #a3943fff) drop-shadow(0 0 6px #b57edc)",
        userSelect: "none",
      }}
    >
      🌘
    </div>
  );
}

export default CustomCursor;
