import React from "react";
import "../assets/styles/Components/Footer.scss";
import logo_facebook from "../assets/static/pink_facebook.svg";
import logo_instagram from "../assets/static/pink_instagram.svg";
import logo_building from "../assets/static/pink_building.svg";
import logo_email from "../assets/static/pink_email.svg";
import logo_phone from "../assets/static/pink_wpp.svg";
import newyorkcasas from "../assets/static/nycasas-logo-black-small.png";

export default function Footer() {
  return (
    <div className="footer">
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
          <div className="footer__social__content">
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
      </div>
      <div className="footer__contact">
        <h4>Contact me</h4>
        <div className="footer__contact--building">
          <a href="https://www.google.com/maps/place/745+5th+Ave+suite+500,+New+York,+NY+10151,+USA/@40.7631646,-73.9773235,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258fa6e49df93:0x15b3992ff3bb4a60!8m2!3d40.7631646!4d-73.9751348" target="_blank" rel="noopener noreferrer">
              <img src={logo_building} alt="" />
          </a>
          <p>
          745 FIFTH AVENUE, SUITE 500 NEW YORK CITY, NY 10151-0099, US
          </p>
        </div>
        <div className="footer__contact--phone">
            <a href="https://wa.link/6rzjp7" target="_blank" rel="noopener noreferrer">
              <img src={logo_phone} alt="" />
            </a>
          <p>
            +1 (917) 770-8636
          </p>
        </div>
        <div className="footer__contact--email">
            <a href="mailto:fernanda@nycasas.com">
              <img src={logo_email} alt="" />
            </a>
          <p>
            fernanda@nycasas.com
          </p>
        </div>
      </div>
      <div className="footer__sponsor">
        <a
          href="https://nycasas.com/team/maria-fernanda-roda.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={newyorkcasas} alt="" />
        </a>
      </div>
    </div>
  );
}
