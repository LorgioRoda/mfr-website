import React from 'react';
import { useForm } from "react-hook-form";
import "../assets/styles/Components/ContactMe.scss"

export default function ContactMe() {
    const { register, handleSubmit, watch, formState: {errors} } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <>
        <div className="content">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__content">
                    <h3>Arrage a meeting with Maria Fernanda to buy, sell or rent your home.</h3>
                    <input placeholder="Your name*" type="text" {...register("example")}/> {errors.exampleRequired && <span>This field is required</span>}
                    <input placeholder="Your email*" type="email" {...register("exampleRequired", { required: true })}/> {errors.exampleRequired && <span>This field is required</span>}
                    <div className="form__content--message">
                        <textarea placeholder="type your message*" type="text"/>
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className="form_content--buttom">
                        <input type="submit"/>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
}
