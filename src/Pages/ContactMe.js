import React, { useState } from "react";
import ModalSuccess from "../Components/ModalSuccess"
import "../assets/styles/Components/ContactMe.scss";
import Form from "../Components/Form";


export default function ContactMe() {
  const [active, setActive]=useState(false)

  const toggle = () => {
    setActive(!active)
  }
  return (
    <>
        <Form/>
    </>
  );
}
