import React, { useState } from "react";
import emailjs from "emailjs-com";
import ModalSuccess from "./ModalSuccess";
import "../assets/styles/Components/ContactMe.scss";

export default function NewLetterForm() {
  const [subscribe, setSubscribe] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleOnChange = (event) => {
    setSubscribe(event.target.value);
  };

  const toggle = () => {
    setShowMessage(!showMessage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      `${process.env.KEYSERVICE}`,
      `${process.env.KEYTEMPLATESUBSCRIBE}`,
      e.target,
      `${process.env.KEYUSER}`
    );
    setSubscribe("");
  };
  return (
    <>
      <div className="newletter">
        <form onSubmit={handleSubmit}>
          <div className="newletter__container">
            <h5>Subcribete my Newlleter here</h5>
            <input
              placeholder="email"
              type="email"
              name="subscribe"
              value={subscribe}
              onChange={(event) => handleOnChange(event)}
            />
            <ModalSuccess
              active={showMessage}
              toggle={toggle}
              handleSubmit={handleSubmit}
            /> {/* El stado no se modifica */}
          </div>
        </form>
      </div>
    </>
  );
}
