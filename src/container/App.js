import React from 'react'
import Home from "../Pages/Home"
import AboutMe from "../Pages/AboutMe"
import Services from '../Pages/Services'
import Recommendation from "../Pages/Recommendation"
import LocalUpdates from '../Pages/LocalUpdates'

export default function app() {
    return (
        <div className="App">
            <Home/>
            <AboutMe/>
            <Services/>
            <Recommendation/>
            <LocalUpdates/>
        </div>
    )
}
