import { useEffect, useState } from "react"
import React from 'react';
import { useForm } from "react-hook-form";


export default function LocalUpdates() {
    const { register, handleSubmit, watch, formState: {errors} } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>Name</p>
            <input type="text" defaultValue="test" {...register("example")}/> {errors.exampleRequired && <span>This field is required and only use numbers</span>}
            <p>Email</p>
            <input type="email" {...register("exampleRequired", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit"/>
        </form>
    );
}
