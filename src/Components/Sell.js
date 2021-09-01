import React from "react";
import "../assets/styles/Components/Rent.scss";
import bed from "../assets/static/bed.svg";
import relax from "../assets/static/relax.svg";
import bath from "../assets/static/bath.svg";

export default function Sell({sell}) {
  return (
    <div className="rent">
      <div className="rent__cart">
        <a
          href="https://nycasas.com/team/maria-fernanda-roda.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rent--image">
            <img src={sell.image} alt="" />
          </div>
          <div className="rent__container">
            <h4>{sell.title}</h4>
            <span>$ {sell.price} / for sale</span>
            <p>
              {sell.description}
            </p>
            <div className="rent__icons">
              <div className="rent--bed">
                <p>
                  {sell.bed}
                  <img src={bed} alt="" />
                </p>
              </div>
              <div className="rent--relax">
                <p>
                {sell.room}
                  <img src={relax} alt="" />
                </p>
              </div>
              <div className="rent--bath">
                <p>
                {sell.bath}
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
