import { useEffect, useState } from "react";

function CustomCursor() {
  if (window.innerWidth < 768) return null;

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
