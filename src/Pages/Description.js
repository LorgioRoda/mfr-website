import React from "react";
import "../assets/styles/Components/Description.scss"
import menu from "../assets/static/toggle.png"
import Mafer from "../assets/static/Mafer.png"
import video from "../assets/static/VideoTS.mp4";
import facebook from "../assets/static/facebook.png"
import instagram from "../assets/static/instagram.png"

export default function Description() {
  return (
    <>
      <header>
        <a href="./main.html" class="logo"> {/* LINK */}
          Maria<span>Fernanda</span>
        </a>
      </header>
      <div class="banner">
        <video
          src={video}
          autoplay={true}
          muted
          loop
          type="mp4"
        />
        <div class="textBox">
          <h2>MARIA FERNANDA RODA</h2>
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
          <a href="./main.html">Read More</a> {/* Linnk */}
        </div>
        <div class="imgBox">
          <img src={Mafer} alt="Maria-Fernanda-Roda" />
        </div>
        <ul class="sci">
          <li>
            <a
              href="https://www.facebook.com/newyorkrealestatemfr"
              target="_blank"
            >
              <img src={facebook} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mariafernandaroda/?hl=en"
              target="_blank"
            >
              <img src={instagram} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
