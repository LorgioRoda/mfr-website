import React, { useState } from "react";
import ModalSuccess from "./ModalSuccess";
import emailjs from "emailjs-com";
import "../assets/styles/Components/ContactMe.scss";

// Validation on Form
const validation = {
  name: (value) => {
    let alert;
    if (!value) {
      alert = "Name is requiered";
    } else if (value.length < 3) {
      alert = "Name have to have more 3 words";
    }
    return alert;
  },
  email: (value) => {
    let alert;
    if (!value) {
      alert = "Email is required";
    }
    return alert;
  },
};
export default function Form() {
  const formContact = { name: "", email: "", message: "" };
  const errors = { name: null, email: null };

  const [contact, setContact] = useState(formContact);
  const [stateErrors, setStateErrors] = useState(errors);
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
    setStateErrors({ ...stateErrors, [name]: validation[name](value) });
  };

  const toggle = () => {
    setShowMessage(!showMessage)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      emailjs.sendForm(
        `${process.env.KEYSERVICE}`,
        `${process.env.KEYTEMPLATE}`,
        e.target,
        `${process.env.KEYUSER}`
      );
      setContact(formContact);
      setShowMessage(!showMessage);
    }
  };

  const isValid = () => {
    return !Object.keys(stateErrors).some(
      (key) => stateErrors[key] !== undefined
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
            />
            {stateErrors.name && <span>{stateErrors.name}</span>}
            <div className="form__content--message">
              <input
                name="email"
                placeholder="Your email*"
                type="email"
                onChange={(event) => handleChange(event)}
                value={contact.email}
              />
              {stateErrors.email && <span>{stateErrors.email}</span>}
              <textarea
                name="message"
                placeholder="type your message"
                type="text"
                onChange={(event) => handleChange(event)}
                value={contact.message}
              />
            </div>
            <div className="form_content--buttom">
              <input type="submit" />
              <ModalSuccess active={showMessage} toggle={toggle} handleSubmit={handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
