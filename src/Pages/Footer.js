import React from "react";
/* Styles */
import "../assets/styles/Components/Footer.scss";
/* Images */
import logo_facebook from "../assets/static/pink_facebook.svg";
import logo_instagram from "../assets/static/pink_instagram.svg";
import logo_building from "../assets/static/pink_building.svg";
import logo_email from "../assets/static/pink_email.svg";
import logo_phone from "../assets/static/pink_wpp.svg";
import newyorkcasas from "../assets/static/nycasas-logo-white-small.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__social">
        <h4>
          Maria <span>Fernanda</span> Roda
        </h4>
        <div className="footer__social__content">
          <h3>Follow me</h3>
          <div className="footer__social--media">
            <a
              href="https://www.instagram.com/mariafernandaroda/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo_instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/newyorkrealestatemfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo_facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__contact">
        <h4>Contact Me</h4>
        <div className="footer__contact--building">
          <a
            href="https://www.google.com/maps/place/745+5th+Ave+suite+500,+New+York,+NY+10151,+USA/@40.7631646,-73.9773235,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258fa6e49df93:0x15b3992ff3bb4a60!8m2!3d40.7631646!4d-73.9751348"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo_building} alt="" />
          </a>
          <p>757 Fifth Avenue, Suite 500 New York City, NY 10151-0099, US</p>
        </div>
        <div className="footer__contact--phone">
          <a
            href="https://wa.link/6rzjp7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo_phone} alt="" />
          </a>
          <p>+1 (917) 770-8636</p>
        </div>
        <div className="footer__contact--email">
          <a href="mailto:fernanda@nycasas.com">
            <img src={logo_email} alt="" />
          </a>
          <p>fernanda@nycasas.com</p>
        </div>
      </div>
      <div className="footer__sponsor">
        <div className="footer_sponsor--imagen">
          <a
            href="https://nycasas.com/team/maria-fernanda-roda.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={newyorkcasas} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
