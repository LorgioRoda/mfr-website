import React from "react";
import "../assets/styles/Components/Rent.scss";
import rent507 from "../assets/static/rent_507west.png";
import rent435 from "../assets/static/rent_435.jpg";
import rent515 from "../assets/static/rent_515.jpg";
import rent505 from "../assets/static/rent_505.jpg";
import bed from "../assets/static/bed.svg";
import relax from "../assets/static/relax.svg";
import bath from "../assets/static/bath.svg";

export default function Rent() {
  return (
    <div className="rent">
      <div className="rent__cart">
        <a
          href="https://streeteasy.com/building/507-west-chelsea/820?utm_campaign=rental_listing&utm_medium=app_share&utm_source=ios&utm_term=f55bd6fb96754a4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rent--image">
            <img src={rent507} alt="" />
          </div>
          <div className="rent__container">
            <h4>507 West 28th Street,10001</h4>
            <span>$ 4,832 / month</span>
            <p>
              Sculpted in glittering glass and linked by an exclusive passageway
              under the High Line, the three towers of 507 West Chelsea are a
              striking new addition to Manhattan’s.
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
        <div className="rent--image">
          <img src={rent435} alt="" />
        </div>
        <div className="rent__container">
          <h4>435 West 31st Street #56D</h4>
          <span>$ 5,440 / month</span>
          <p>
            Now offering virtual tours and self-guided tours! Inquire for
            details. The Eugene, Manhattan West’s newest rental offering in the
            Hudson Yards District.
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
      </div>
      <div className="rent__cart">
        <div className="rent--image">
          <img src={rent515} alt="" />
        </div>
        <div className="rent__container">
          <h4>515 West 36th Street #9C</h4>
          <span>$ 3,855 / month</span>
          <p>
            Gross rent is $4,625. We are currently offering 2 Months FREE on a 12 Month lease for leases starting immediately.
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
      </div>
      <div className="rent__cart">
        <div className="rent--image">
          <img src={rent505} alt="" />
        </div>
        <div className="rent__container">
          <h4>505 W 37th Street #15D</h4>
          <span>$ 3,660 / month</span>
          <p>
            505 W 37th St is an icon of luxury Midtown Manhattan living. The northern ambassador to Hudson Yards, 505W37‚
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
