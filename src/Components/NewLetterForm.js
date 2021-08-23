import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function NewLetterForm() {
  const [subscribe, setSubscribe] = useState("");

  const handleOnChange = (event) => {
    setSubscribe(event.target.value)
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
            {/* Submitn only with enter */}
{/*             <button type="submit">Submit</button> */}
          </div>
        </form>
      </div>
    </>
  );
}
