import React from "react";
import "./MyContact.css";
import ContactForm from "../ContactForm/ContactForm";

function MyContact() {
  return (
    <section id="contact">
      {/* <h2 className="section-title">Contact Me</h2> */}
      <ContactForm />
    </section>
  );
}

export default MyContact;
