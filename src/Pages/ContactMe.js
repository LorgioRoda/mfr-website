import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../assets/styles/Components/ContactMe.scss";
import Form from "../Components/Form";

//value with regex
const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Validation on Form
const validation = {
  name: (value ) => {
    let alert;
    if (!value || !regName) {
      alert = "Name is requiered and only use words";
    } else if (value.length < 3) {
      alert = "Name have to have more 3 words";
    }
    return alert;
  },
  email: (value) => {
    let alert;
    if (!value || !regEmail) {
      alert = "Email is required";
    }
    return alert;
  },
};

export default function ContactMe() {

  return (
    <>
        <Form/>
    </>
  );
}
