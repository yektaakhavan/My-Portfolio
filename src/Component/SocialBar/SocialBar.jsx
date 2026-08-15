import { socialLinks } from "../../data/socialLinks";

function SocialBar() {
  return (
    <div className="pointer-events-none fixed top-1/2 left-0 z-[9999] hidden -translate-y-1/2 flex-col gap-4 rounded-r-2xl border border-white/15 bg-white/5 p-3.5 backdrop-blur-md md:flex">
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target={url.startsWith("mailto:") ? undefined : "_blank"}
          rel={url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={label}
          className="group pointer-events-auto relative text-2xl text-[#f8e7d5]/80 transition duration-200 hover:-translate-x-1 hover:scale-110 hover:text-[#f8e7d5] hover:opacity-100"
        >
          <Icon />
          <span className="pointer-events-none absolute left-[165%] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-white/15 bg-white/10 px-2.5 py-1 text-xs text-[#f8e7d5] opacity-0 backdrop-blur-md transition group-hover:opacity-100">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}

export default SocialBar;
