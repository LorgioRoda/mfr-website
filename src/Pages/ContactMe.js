import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../assets/styles/Components/ContactMe.scss";

export default function ContactMe() {
  const formContact = { name: "", email: "", message: "" };
  const [contact, setContact] = useState(formContact);
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (event) => {
    console.log({name, value});
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      `${process.env.KEYSERVICE}`,
      `${process.env.KEYTEMPLATE}`,
      e.target,
      `${process.env.KEYUSER}`
    );
  };

  return (
    <>
      <div className="content">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__content">
            <h3>
              Arrange a meeting with Maria Fernanda to buy, sell or rent your
              home.
            </h3>
            <input
              name="name"
              placeholder="Your name*"
              type="text"
              onChange={(event) => handleChange(event)}
              value={contact.name}
            />{" "}
            <span>This field is required</span>
            <div className="form__content--message">
              <input
                name="email"
                placeholder="Your email*"
                type="email"
                onChange={(event) => handleChange(event)}
                value={contact.email}
              />{" "}
              <span>This field is required</span>
              <textarea
                name="message"
                placeholder="type your message*"
                type="text"
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="form_content--buttom">
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
