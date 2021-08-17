import React from 'react'
import Home from "../Pages/Home"
import Services from '../Pages/Services'
import Recommendation from "../Pages/Recommendation"
import Footer from '../Pages/Footer'
import ContactMe from '../Pages/ContactMe'
import Listings from '../Pages/Listings'

export default function app() {
    return (
        <>
            <Home/>
            <Listings/>
            <Services/>
            <Recommendation/>
            <ContactMe/>
            <Footer/>
        </>
    )
}
