import React, {useState} from 'react';
import emailjs from 'emailjs-com'
import "../assets/styles/Components/ContactMe.scss"

export default function ContactMe() {
    const formContact = {name: "", email: "", text: ""}
    const {contact, setContact} = useState(formContact)
    const {showMessage, setShowMessage} = useState(false)

    const 
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${process.env.KEYSERVICE}`, `${process.env.KEYTEMPLATE}`, e.target, `${process.env.KEYUSER}`)
      }

    return (
        <>
            <div className="content">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form__content">
                        <h3>Arrange a meeting with Maria Fernanda to buy, sell or rent your home.</h3>
                        <input name="name" placeholder="Your name*" type="text"/>  <span>This field is required</span>
                        <div className="form__content--message">
                        <input name="email" placeholder="Your email*" type="email"/> <span>This field is required</span>
                            <textarea name="message" placeholder="type your message*" type="text"/>
                        </div>
                        <div className="form_content--buttom">
                            <input type="submit"/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
