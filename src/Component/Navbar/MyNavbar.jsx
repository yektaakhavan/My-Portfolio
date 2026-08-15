import { useEffect, useState } from "react";
import { navSections } from "../../data/nav";
import { socialLinks } from "../../data/socialLinks";

function MyNavbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showOffcanvas ? "hidden" : "";
  }, [showOffcanvas]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll("main section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) current = section.getAttribute("id");
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navBg = scrolled
    ? "bg-ink-light/85 shadow-[0_2px_12px_rgba(100,70,130,0.6)]"
    : "bg-ink-light/60";

  return (
    <>
      {/* دسکتاپ */}
      <nav
        className={`sticky top-0 z-[1000] hidden justify-center gap-10 py-4 backdrop-blur-md transition-colors md:flex ${navBg}`}
      >
        {navSections.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`group relative flex items-center gap-1.5 text-[1.05rem] font-bold transition-colors ${
              activeSection === id ? "text-gold" : "text-lilac hover:text-gold"
            }`}
          >
            <Icon
              className={`text-sm transition-opacity ${
                activeSection === id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
            {label}
            <span
              className={`absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded bg-gradient-to-r from-gold via-gold-soft to-gold transition-all ${
                activeSection === id ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </button>
        ))}
      </nav>

      {/* موبایل */}
      <nav
        className={`sticky top-0 z-[1000] flex justify-end p-2 backdrop-blur-md transition-colors md:hidden ${navBg}`}
      >
        <button
          onClick={() => setShowOffcanvas(true)}
          aria-label="Open menu"
          className="rounded-2xl border border-gold/20 bg-ink-light/45 p-3 shadow-md transition hover:-translate-y-0.5 hover:bg-gold/10"
        >
          <div className="grid grid-cols-3 gap-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-gold" />
            ))}
          </div>
        </button>
      </nav>

      {/* منوی کشویی موبایل */}
      {showOffcanvas && (
        <div className="fixed inset-0 z-[2000]">
          <div
            onClick={() => setShowOffcanvas(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 left-0 w-4/5 max-w-[300px] animate-slide-in-left overflow-y-auto bg-gradient-to-br from-ink-light/95 to-ink/95 p-4 shadow-2xl">
            <button
              onClick={() => setShowOffcanvas(false)}
              aria-label="Close menu"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-3xl text-gold transition hover:bg-gold/10"
            >
              &times;
            </button>

            <div className="mt-12 flex flex-col gap-1">
              {navSections.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    setShowOffcanvas(false);
                  }}
                  className={`flex items-center gap-4 rounded-lg p-4 text-left text-[1.05rem] font-semibold transition ${
                    activeSection === id
                      ? "translate-x-1 bg-gold/10 text-gold"
                      : "text-lilac hover:translate-x-1 hover:bg-gold/10 hover:text-gold"
                  }`}
                >
                  <Icon className="text-lg" />
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-12 border-t border-gold/20 pt-8">
              <h4 className="mb-4 text-lg font-semibold text-gold">Connect with me</h4>
              <div className="flex flex-col gap-3">
                {socialLinks.map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg p-3 text-lilac transition hover:translate-x-1 hover:bg-gold/10 hover:text-gold"
                  >
                    <Icon className="text-xl" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyNavbar;
