import { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-[999] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-[#9e7de0] text-ink shadow-[0_0_18px_rgba(225,198,153,0.5)] backdrop-blur-md transition hover:-translate-y-1.5 hover:scale-105 hover:from-gold-soft hover:to-[#b59ae9] hover:shadow-[0_0_25px_rgba(225,198,153,0.9)] sm:bottom-8 sm:right-8 sm:h-[58px] sm:w-[58px]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.3"
        stroke="currentColor"
        className="h-5 w-5 sm:h-[30px] sm:w-[30px]"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
}

export default ScrollToTopButton;
