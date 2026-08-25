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
    <div id="contact">
      <div>
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me on any of these channels:</p>

        <div>
          {contactInfo.map((contact, index) => (
            <div key={index}>
              <span>{contact.icon}</span>
              <h3>{contact.label}</h3>
              {contact.href ? (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.value}
                </a>
              ) : (
                <p>{contact.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
