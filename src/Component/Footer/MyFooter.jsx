import FootLogo from "../../assets/images/logo/logo-ya.webp";

function MyFooter() {
  return (
    <footer className="flex items-center justify-center gap-2.5 bg-ink-light px-4 py-8 text-center font-semibold text-lilac shadow-[0_-2px_10px_rgba(100,70,130,0.5)]">
      <img
        src={FootLogo}
        alt="Yekta Akhavan logo"
        className="h-[38px] w-[38px] rounded-full shadow-[0_0_8px_rgba(225,198,153,0.5)] transition hover:rotate-3 hover:scale-110"
      />
      <span>
        &copy; {new Date().getFullYear()} — Designed &amp; Built with 💜 by{" "}
        <span className="text-gold">Yekta Akhavan</span>
      </span>
    </footer>
  );
}

export default MyFooter;
