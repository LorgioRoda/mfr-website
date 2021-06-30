import React from "react";
import "../assets/styles/Components/AboutMe.scss";
import Mafer from "../assets/static/aboutme__Principal.jpg";

export default function AboutMe() {
  return (
    <>
      <div className="aboutme">
        <div className="aboutme--title">
          <h2>
            Hi, my name's Maria Fernanda Roda. I'm a NYC Real Estate agent.
          </h2>
        </div>
        <div className="aboutme--img">
          <img src={Mafer} alt="" />
        </div>
        <div className="aboutme__container">
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
          <button>
            Learn More <span>" "</span>
          </button>
        </div>
      </div>
    </>
  );
}
