import { useEffect, useState } from "react";

function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  // موقعیت کرسر
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // بررسی وضعیت لایت‌باکس
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isLightbox = document.body.classList.contains("lightbox-active");
      setVisible(!isLightbox);
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // اگر لایت‌باکس فعاله، کرسر نمایش داده نشه
  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        fontSize: "28px",
        zIndex: 9999,
        animation: "shine 1.5s infinite alternate",
        filter:
          "drop-shadow(0 0 6px #b57edc) drop-shadow(0 0 10px #ffd700) drop-shadow(0 0 18px #b57edc)",
        userSelect: "none",
        transition: "transform 0.08s ease-out",
      }}
    >
      🌘
    </div>
  );
}

export default CustomCursor;

{
  /* ✨ */
}
{
  /* 💫 */
}
{
  /* 🟣 */
}
{
  /* 🌑 */
}
