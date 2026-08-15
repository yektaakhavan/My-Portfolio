import { useState } from "react";
import emailjs from "@emailjs/browser";
import { socialLinks, contactEmail } from "../../data/socialLinks";

// ─────────────────────────────────────────────────────────────
// برای اینکه فرم واقعاً ایمیل ارسال کنه (بدون باز شدن اپ میل کاربر)،
// یک حساب رایگان در https://www.emailjs.com بساز و این سه مقدار رو
// از پنل EmailJS اینجا جایگزین کن. تا وقتی این مقادیر خالی باشن،
// فرم به‌صورت خودکار روی حالت mailto (باز شدن اپ میل) کار می‌کنه.
const EMAILJS_SERVICE_ID = "";
const EMAILJS_TEMPLATE_ID = "";
const EMAILJS_PUBLIC_KEY = "";

const isEmailJsConfigured = EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+98\s?9\d{2}\s?\d{3}\s?\d{4}$/;

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "+98 ",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [toast, setToast] = useState("");

  const validate = (name, value) => {
    let msg = "";
    if (name === "email" && !emailRegex.test(value)) msg = "Invalid email";
    if (name === "phone" && !phoneRegex.test(value)) msg = "Invalid Iranian number";
    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(errors).some((err) => err !== "")) return;

    if (!isEmailJsConfigured) {
      const mailto = `mailto:${contactEmail}?subject=Contact from ${
        formData.fullName
      }&body=${encodeURIComponent(
        `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
      )}`;
      window.location.href = mailto;
      showToast("Message prepared in mail app ✅");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      showToast("Message sent successfully ✅");
      setFormData({ fullName: "", email: "", phone: "+98 ", message: "" });
    } catch (err) {
      setStatus("error");
      showToast("Something went wrong — please try again ❌");
    }
  };

  return (
    <section id="contact">
      <div className="mx-auto my-16 max-w-[630px] rounded-[18px] bg-white/5 p-6 text-center shadow-[0_6px_20px_rgba(126,88,204,0.6)] backdrop-blur-xl sm:p-10">
        {toast && (
          <div className="mb-3 animate-fade-in-up rounded-md bg-gold px-5 py-2.5 font-semibold text-[#201042]">
            {toast}
          </div>
        )}
        <h2 className="mb-6 text-3xl font-bold text-gold sm:text-4xl">Get In Touch</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-lilac">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="rounded-[10px] border border-[#5e4c8b] bg-[#2a1755] px-4 py-3 text-white outline-none transition focus:border-gold focus:shadow-[0_0_10px_rgba(225,198,153,0.44)]"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm text-lilac">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-[10px] border border-[#5e4c8b] bg-[#2a1755] px-4 py-3 text-white outline-none transition focus:border-gold focus:shadow-[0_0_10px_rgba(225,198,153,0.44)]"
            />
            {errors.email && <small className="mt-1 text-[#e15555]">{errors.email}</small>}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm text-lilac">Phone (Iran format)</label>
            <input
              type="tel"
              name="phone"
              placeholder="+98 912 000 0000"
              value={formData.phone}
              onChange={handleChange}
              required
              className="rounded-[10px] border border-[#5e4c8b] bg-[#2a1755] px-4 py-3 text-white outline-none transition focus:border-gold focus:shadow-[0_0_10px_rgba(225,198,153,0.44)]"
            />
            {errors.phone && <small className="mt-1 text-[#e15555]">{errors.phone}</small>}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm text-lilac">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="rounded-[10px] border border-[#5e4c8b] bg-[#2a1755] px-4 py-3 text-white outline-none transition focus:border-gold focus:shadow-[0_0_10px_rgba(225,198,153,0.44)]"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-gold py-3 text-lg font-bold text-ink transition hover:scale-[1.03] hover:bg-[#c9b26e] disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
        </form>

        {/* لینک‌های اجتماعی — فقط روی موبایل نمایش داده می‌شن */}
        <div className="mt-10 border-t border-gold/20 pt-8 md:hidden">
          <h3 className="mb-6 text-xl font-semibold text-gold">Or find me on</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target={url.startsWith("mailto:") ? undefined : "_blank"}
                rel={url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gold/20 bg-white/5 text-2xl text-lilac backdrop-blur-md transition hover:-translate-y-1 hover:border-gold hover:bg-gold/10 hover:text-gold hover:shadow-[0_8px_20px_rgba(225,198,153,0.3)]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
