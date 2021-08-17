import React, { useState } from 'react'
import emailjs from "emailjs-com";
import "../assets/styles/Components/ContactMe.scss"

// Validation on Form
const validation = {
    name: (value ) => {
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

export default function NewLetterForm() {
    const [ state, setState ] = useState("")

    const handleChange = (event)=> {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
        setState({ ...state, [name]: validation[name](value) });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(isValid()){
            emailjs.sendForm(
              `${process.env.KEYSERVICE}`,
              `${process.env.KEYTEMPLATE}`,
              e.target,
              `${process.env.KEYUSER}`
            );
            setState(state);
            alert('Funciona')
        }else if(!isValid()){
            alert("No")
        }
    };

      const isValid = () => {
        return !Object.keys(state).some((key) => state[key] !== undefined);
      };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <input
                    name="name"
                    placeholder="Your name*"
                    type="text"
                    onChange={(event) => handleChange(event)}
                    value={state}
                    />
                    </div>
                {state && <span>{state}</span>}
            </form>
        </>
    )
}
