import React from "react";
import facebook from "../assets/static/facebook.png";
import instagram from "../assets/static/instagram.png";

export default function Footer() {
  return (
    <div className="footer">
      <li className="footer__contact">
        <h4>Contact me</h4>
        <p>
          <i></i>745 FIFTH AVENUE, SUITE 500 NEW YORK CITY, NY 10151-0099, USA
        </p>
        <p>
          <i></i>48585840394
        </p>
        <p>
          <i></i>fernanda@nycasas.com
        </p>
      </li>
      <li>
        <div className="footer__social">
          <h4>
            Maria <span>Fernanda</span> Roda
          </h4>
          <p>
            Maria Fernanda specialized in the rental and sale properties in
            Manhattan, Brooklyn, and Long Island City. Maria Fernanda speaks
            Spanish and has personally assisted clients from Latin America and
            Spain.
          </p>
          <a
            href="https://www.instagram.com/mariafernandaroda/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="" />
          </a>
          <a
            href="https://www.instagram.com/mariafernandaroda/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="" />
          </a>
        </div>
        <div className="footer__sponsor">
          <img src="" alt="" />
        </div>
      </li>
    </div>
  );
}
