import React from "react";
import logo_facebook from "../assets/static/pink_facebook.svg";
import logo_instagram from "../assets/static/pink_instagram.svg"
import logo_building from "../assets/static/pink_building.svg"
import logo_email from "../assets/static/pink_email.svg";
import logo_phone from "../assets/static/pink_wpp.svg";
import newyorkcasas from "../assets/static/nycasas-logo-black-small.png"

export default function Footer() {
  return (
    <div className="footer">
      <li className="footer__contact">
        <h4>Contact me</h4>
        <p>
        <img src={logo_building} alt=""/>745 FIFTH AVENUE, SUITE 500 NEW YORK CITY, NY 10151-0099, USA
        </p>
        <p>
          <img src={logo_phone} alt=""/> 48585840394
        </p>
        <p>
        <img src={logo_email} alt=""/>fernanda@nycasas.com
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
            <img src={logo_instagram} alt="" />
          </a>
          <a
            href="https://www.facebook.com/newyorkrealestatemfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo_facebook} alt="" />
          </a>
        </div>
        <div className="footer__sponsor">
          <a href="https://nycasas.com/team/maria-fernanda-roda.php" target="_blank" rel="noopener noreferrer"><img src={newyorkcasas} alt="" /></a>
        </div>
      </li>
    </div>
  );
}
