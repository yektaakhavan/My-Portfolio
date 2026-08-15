import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

// این‌جا همه‌ی لینک‌های شبکه‌های اجتماعی یک‌جا نگه‌داری می‌شن
// هر جای سایت (SocialBar, Navbar, ContactForm, ...) که به این لینک‌ها نیاز داشت
// از همین فایل import می‌کنه؛ یعنی برای عوض کردن یک لینک فقط کافیه همین‌جا رو ویرایش کنی.
export const socialLinks = [
  {
    icon: FaGithub,
    url: "https://github.com/yektaakhavan",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    url: "https://linkedin.com/in/yekta-akhavan",
    label: "LinkedIn",
  },
  {
    icon: FaTelegramPlane,
    url: "https://t.me/yektaa_akhavan",
    label: "Telegram",
  },
  {
    icon: IoMail,
    url: "mailto:yekta.akhavan.dev@gmail.com",
    label: "Email",
  },
];

export const contactEmail = "yekta.akhavan.dev@gmail.com";
