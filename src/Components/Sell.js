import React from "react";
import "../assets/styles/Components/Rent.scss";
import plaza from "../assets/static/plaza.jpg";
import sale_101 from "../assets/static/sale_101.jpg";
import sale_527 from "../assets/static/sale_527.jpg";
import sale_515 from "../assets/static/sale_515.jpg";
import bed from "../assets/static/bed.svg";
import relax from "../assets/static/relax.svg";
import bath from "../assets/static/bath.svg";

export default function Sell() {
  return (
    <div className="rent">
      <div className="rent__cart">
        <a
          href="https://nycasas.com/team/maria-fernanda-roda.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rent--image">
            <img src={plaza} alt="" />
          </div>
          <div className="rent__container">
            <h4>Plaza Hotel 768 Fifth Avenue</h4>
            <span>$ 1,500,000 / for sale</span>
            <p>
            The perfect Pied-a-terre, as well as an incredible investment opportunity— a master bedroom Rose Suite in the iconic Plaza Hotel...
            </p>
            <div className="rent__icons">
              <div className="rent--bed">
                <p>
                  1
                  <img src={bed} alt="" />
                </p>
              </div>
              <div className="rent--relax">
                <p>
                  3
                  <img src={relax} alt="" />
                </p>
              </div>
              <div className="rent--bath">
                <p>
                  1
                  <img src={bath} alt="" />
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="rent__cart">
        <a
          href="https://nycasas.com/team/maria-fernanda-roda.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rent--image">
            <img src={sale_101} alt="" />
          </div>
          <div className="rent__container">
            <h4>101 West 14th Street #3B</h4>
            <span>$ 3,850,000 / for sale</span>
            <p>
            A brand new condo saturated with natural light, this 2-bedroom, 2-bathroom home is a paradigm of urban refinement and sophisticated design....
            </p>
            <div className="rent__icons">
              <div className="rent--bed">
                <p>
                  2
                  <img src={bed} alt="" />
                </p>
              </div>
              <div className="rent--relax">
                <p>
                  4
                  <img src={relax} alt="" />
                </p>
              </div>
              <div className="rent--bath">
                <p>
                  2
                  <img src={bath} alt="" />
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="rent__cart">
        <a
          href="https://nycasas.com/team/maria-fernanda-roda.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rent--image">
            <img src={sale_515} alt="" />
          </div>
          <div className="rent__container">
            <h4>515 West 18th Street #PH1016</h4>
            <span>$ 8,495,000 / for sale</span>
            <p>
            Penthouse 1016, this 2,353 square foot residence at Lantern House features beautiful light and both High Line and city views....
            </p>
            <div className="rent__icons">
              <div className="rent--bed">
                <p>
                  2
                  <img src={bed} alt="" />
                </p>
              </div>
              <div className="rent--relax">
                <p>
                  4
                  <img src={relax} alt="" />
                </p>
              </div>
              <div className="rent--bath">
                <p>
                  2.5
                  <img src={bath} alt="" />
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="rent__cart">
        <a
          href="https://nycasas.com/team/maria-fernanda-roda.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rent--image">
            <img src={sale_527} alt="" />
          </div>
          <div className="rent__container">
            <h4>527 West 27th Street #7B</h4>
            <span>$ 3,475,000 / for sale</span>
            <p>
            Residence 7B is meticulously conceived by award-winning Brazilian architect Isay Weinfeld, this 2-bedroom, 2.5-bathroom residence comprising...
            </p>
            <div className="rent__icons">
              <div className="rent--bed">
                <p>
                  2
                  <img src={bed} alt="" />
                </p>
              </div>
              <div className="rent--relax">
                <p>
                  4
                  <img src={relax} alt="" />
                </p>
              </div>
              <div className="rent--bath">
                <p>
                  2.5
                  <img src={bath} alt="" />
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
