// import React, { useState } from "react";
// import "./ContactForm.css";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "+98",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const mailto = `mailto:yekta.akhavan.dev@gmail.com?subject=Contact from ${
//       formData.fullName
//     }&body=${encodeURIComponent(
//       `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
//     )}`;

//     window.location.href = mailto;
//   };

//   return (
//     <div className="contact-wrapper">
//       <h2 className="form-title">Get In Touch</h2>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Your Name"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="example@mail.com"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Phone (with country code)</label>
//           <input
//             type="tel"
//             name="phone"
//             placeholder="+98 900 000 0000"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Message</label>
//           <textarea
//             name="message"
//             rows="4"
//             placeholder="Write your message..."
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="submit-btn">
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;

import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "+98 ",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+98\s?9\d{2}\s?\d{3}\s?\d{4}$/;

  const validate = (name, value) => {
    let msg = "";
    if (name === "email" && !emailRegex.test(value)) msg = "Invalid email";
    if (name === "phone" && !phoneRegex.test(value))
      msg = "Invalid Iranian number";
    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).some((err) => err !== "")) return;

    const mailto = `mailto:yekta.akhavan.dev@gmail.com?subject=Contact from ${
      formData.fullName
    }&body=${encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    )}`;

    window.location.href = mailto;

    setToast("Message prepared in mail app ✅");
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <section id="contact">
      <div className="contact-wrapper">
        {toast && <div className="toast">{toast}</div>}
        <h2 className="form-title">Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label>Phone (Iran format)</label>
            <input
              type="tel"
              name="phone"
              placeholder="+98 912 000 0000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <small className="error">{errors.phone}</small>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
