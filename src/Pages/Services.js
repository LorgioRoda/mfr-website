import React from "react";
import "../assets/styles/Components/Services.scss";
import rentIcon from "../assets/static/rentIcon.svg"
import buyIcon from "../assets/static/buyIcon.svg"
import informationIcon from "../assets/static/informationIcon.svg";

export default function Services() {
  return (
    <div className="services">
      <div className="services__title">
        <h3>How may I help you? </h3>
      </div>
        <div className="services__content">
          <div className="services--buyhome">
            <img src={buyIcon}  alt="Buy, sell or rent" />
            <h3>
              <strong>Buy a home with me</strong>
            </h3>
            <p>
              Buying a home doesn’t have to be an overwhelming process when you
              have the right professional by your side.
              Let’s find one you’ll
              love.
            </p>
          </div>
          <div className="services--sellhome">
            <img src={rentIcon} alt="Rent" />
            <h3>
              <strong>Sell home</strong>
            </h3>
            <p>
              Do you know what your home is truly worth in our market? If you
              price too high, you won’t sell. If you price too low, you could be
              losing tens of thousands.
            </p>
          </div>
          <div className="services--localexpertise">
            <img src={informationIcon} alt="Local Expertise" />
            <h3>
              <strong>Information for foreign buyer</strong>
            </h3>
            <p>
              No matter your real estate needs, as a local expert in our market, I
              can assist! Whether you’re staying in town or moving out of state,
              I’ll simplify the process.
            </p>
          </div>
        </div>
      </div>
  );
}
