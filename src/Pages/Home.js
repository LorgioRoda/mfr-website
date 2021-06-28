import React from 'react'
import "../assets/styles/Components/Home.scss"

export default function Home() {
    return (
        <>
            <header className="banner">
                <nav className="banner__menu">
                <a href="./main.html" className="logo"> {/* LINK */}
                    Maria<span>Fernanda</span>
                </a>
                </nav>
                <div className="banner__container">
                    <h1>MARIA FERNANDA RODA</h1>
                    <p>
                        Maria Fernanda specialized in the rental and sale properties in
                        Manhattan, Brooklyn, and Long Island City. Fernanda currently
                        resides in Hudson Yards Manhattan. Maria Fernanda's goal is to keep
                        her clients happy and help them get the most out of their
                        investment. She is uniquely experienced in guiding international
                        clients through the concrete jungle in their own language. Maria
                        Fernanda speaks Spanish and has personally assisted clients from
                        Latin America and Spain.
                    </p>
                    <button></button>
                </div>
            </header>
        </>
    )
}
