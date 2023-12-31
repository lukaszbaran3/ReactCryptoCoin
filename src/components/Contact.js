import React from "react";
import "../css/Contact.css";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div id="contact" className="contact">
      <ContactForm />
      <div className="contact-bottom">
        <h2>You can find us on:</h2>
        <div className="contact-icons">
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-discord"></i>
        </div>
        <div className="contact-info">
          <p>Privacy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
