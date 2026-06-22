import React from "react";
import "./Contact.css";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📱",
      label: "Phone",
      value: "+66 84 - 573 - 9901",
      href: "tel:+66845739901",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "james.poowamin7@gmail.com",
      href: "mailto:james.poowamin7@gmail.com",
    },
    {
      icon: "📍",
      label: "Location",
      value: "177/1 Phufa Place, Chiang Mai",
      href: null,
    },
    {
      icon: "🔗",
      label: "GitHub",
      value: "github.com/poowamin",
      href: "https://github.com/poowamin",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Feel free to reach out to me on any of these channels:
        </p>

        <div className="contact-grid">
          {contactInfo.map((contact, index) => (
            <div key={index} className="contact-card">
              <span className="contact-icon">{contact.icon}</span>
              <h3 className="contact-label">{contact.label}</h3>
              {contact.href ? (
                <a
                  href={contact.href}
                  className="contact-value"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="contact-value">{contact.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
