import React from "react";
import "../assets/styles/Components/Rent.scss";
import rent507 from "../assets/static/rent_507west.png";
import bed from "../assets/static/bed.svg";
import relax from "../assets/static/relax.svg";
import bath from "../assets/static/bath.svg";

export default function Rent() {
  return (
    <div className="rent">
      <div className="rent__cart">
        <div className="rent--image">
          <img src={rent507} alt="" />
        </div>
        <div className="rent__container">
          <h4>Title</h4>
          <span>$ 2313 / month</span>
          <p>
            Come live in this LUXURY FULL service building with 24-hour doorman
            & amazing amenities.
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
                2
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
      </div>
      <div className="rent__cart">
        <div className="rent--image">
          <img src={rent507} alt="" />
        </div>
        <div className="rent__container">
          <h4>Title</h4>
          <span>$ 2313 / month</span>
          <p>
            Come live in this LUXURY FULL service building with 24-hour doorman
            & amazing amenities.
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
                2
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
      </div>
      <div className="rent__cart">
        <div className="rent--image">
          <img src={rent507} alt="" />
        </div>
        <div className="rent__container">
          <h4>Title</h4>
          <span>$ 2313 / month</span>
          <p>
            Come live in this LUXURY FULL service building with 24-hour doorman
            & amazing amenities.
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
                2
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
      </div>
      <div className="rent__cart">
        <div className="rent--image">
          <img src={rent507} alt="" />
        </div>
        <div className="rent__container">
          <h4>Title</h4>
          <span>$ 2313 / month</span>
          <p>
            Come live in this LUXURY FULL service building with 24-hour doorman
            & amazing amenities.
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
                2
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
      </div>
    </div>
  );
}
