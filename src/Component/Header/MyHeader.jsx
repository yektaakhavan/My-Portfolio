import LogoFull from "../../assets/images/logo/logo-full2.webp";
import DevSvg from "../../assets/images/Illustrations/web-development_0wdh.svg";
import { skillsData } from "../../data/skills";

// همون مهارت‌های فرانت‌اند/ابزار که در بخش Skills هم استفاده می‌شن — این گرید
// دستی نگه‌داری نمی‌شه، خودش با تغییر src/data/skills.js به‌روز می‌مونه.
const headerTechIcons = skillsData.filter((s) => s.category !== "soft").slice(0, 12);

function MyHeader() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top,_var(--color-plum)_0%,_var(--color-ink)_65%)] shadow-[0_4px_25px_rgba(100,70,130,0.5)]">
      <div
        aria-hidden="true"
        className="header-stars pointer-events-none absolute inset-0 opacity-30"
      />

      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-[220px_1fr_300px] lg:gap-8 lg:px-10">
        {/* گرید مهارت‌ها — فقط از lg به بالا */}
        <div className="hidden grid-cols-3 gap-3 lg:grid">
          {headerTechIcons.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 py-3 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/25"
            >
              <Icon className="text-2xl" style={{ color }} />
              <span className="text-center text-[0.68rem] font-medium leading-tight text-lilac-soft">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* متن مرکزی */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-5">
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-full bg-gold/25 blur-2xl"
            />
            <img
              src={LogoFull}
              alt="Yekta Akhavan logo"
              className="w-24 rounded-full ring-2 ring-gold/40 sm:w-28"
            />
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-white">Yekta </span>
            <span className="bg-gradient-to-r from-gold-soft to-gold bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(225,198,153,0.35)]">
              Akhavan
            </span>
          </h1>

          <p className="mt-4 text-base font-semibold sm:text-lg">
            <span className="text-lilac">Frontend Developer</span>
            <span className="mx-2 text-gold/60">|</span>
            <span className="text-gold-soft">React • Tailwind CSS • Creative UI</span>
          </p>

          <div className="mt-5 flex w-full max-w-xs items-center gap-3 text-gold/50">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
            <span className="text-sm tracking-widest">&lt;/&gt;</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-lilac-soft sm:text-base">
            Building modern, responsive and user-focused web applications with
            clean code and a great user experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="rounded-full bg-gradient-to-r from-gold-soft to-gold px-6 py-2.5 text-sm font-bold text-ink shadow-[0_0_14px_rgba(225,198,153,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(225,198,153,0.85)]"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full border border-gold/60 px-6 py-2.5 text-sm font-bold text-gold transition hover:-translate-y-0.5 hover:bg-gold/10"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* ایلوستریشن اصلی — فقط از lg به بالا؛ فایل SVG کلی فضای خالی سمت راستش داره
            برای همین با overflow-hidden فقط قسمت کاراکتر رو نگه می‌داریم (crop دقیق) */}
        <div className="relative hidden h-[320px] w-[300px] items-end justify-end overflow-hidden justify-self-end lg:flex">
          <span
            aria-hidden="true"
            className="absolute bottom-6 right-10 -z-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl"
          />
          <img
            src={DevSvg}
            alt=""
            aria-hidden="true"
            className="h-[468px] w-auto max-w-none -scale-x-100 drop-shadow-[0_0_25px_rgba(225,198,153,0.12)]"
          />
        </div>
      </div>
    </header>
  );
}

export default MyHeader;
