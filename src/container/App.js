import React from 'react'
import Home from "../Pages/Home"
import AboutMe from "../Pages/AboutMe"
import Services from '../Pages/Services'


export default function app() {
    return (
        <div className="App">
            <Home/>
            <AboutMe/>
            <Services/>
        </div>
    )
}
