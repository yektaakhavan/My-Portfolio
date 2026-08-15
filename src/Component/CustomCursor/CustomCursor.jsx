import { useEffect, useState } from "react";

function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isLargeScreen = window.innerWidth > 1024;
      return !isTouchDevice && isLargeScreen;
    };

    setIsDesktop(checkDevice());
    const handleResize = () => setIsDesktop(checkDevice());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("custom-cursor-active", isDesktop);
    return () => document.body.classList.remove("custom-cursor-active");
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;
    const observer = new MutationObserver(() => {
      setVisible(!document.body.classList.contains("lightbox-active"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [isDesktop]);

  if (!isDesktop || !visible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[9999] select-none text-[28px] [filter:drop-shadow(0_0_2px_#b57edc)_drop-shadow(0_0_4px_#a3943f)_drop-shadow(0_0_6px_#b57edc)]"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      🌘
    </div>
  );
}

export default CustomCursor;
