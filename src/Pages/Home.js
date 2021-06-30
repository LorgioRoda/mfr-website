import React from "react";
import "../assets/styles/Components/Home.scss";
import Mafer from "../assets/static/Mafer.png";
import video from "../assets/static/VideoTS.mp4";
import facebook from "../assets/static/facebook.png";
import instagram from "../assets/static/instagram.png";


export default function Description() {
  return (
    <>
      <header>
        <a href="./main.html" className="logo">
          {" "}
          {/* LINK  */}
          Maria<span>Fernanda</span>
        </a>
      </header>
      <div className="banner">
        <video src={video} autoPlay={true} muted loop type="mp4" />
        <div className="textBox">
          <h2>MARIA FERNANDA RODA</h2>
          <p>
            Maria Fernanda specialized in the rental and sale properties in
            Manhattan, Brooklyn, and Long Island City. <br />
            Maria Fernanda speaks Spanish and has personally assisted clients
            from Latin America and Spain.
          </p>
          <a href="./main.html">Read More</a> {/*  Link */}
        </div>
        <div className="imgBox">
          <img src={Mafer} alt="Maria-Fernanda-Roda" />
        </div>
        <ul className="sci">
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
