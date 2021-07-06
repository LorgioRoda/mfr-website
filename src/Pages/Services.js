import React from "react";
import "../assets/styles/Components/Services.scss"

export default function Services() {
  return (
    <div className="services">
      <div className="services__title">
        <h2>Our Services for You</h2>
      </div>
      {/* <div className="services__content"> */}
        <div className="services--buyhome">
          <img src="" alt="" />
          <h3>
            <strong>BUY HOME</strong>
          </h3>
          <p>
            Buying a home doesn’t have to be an overwhelming process when you
            have the right professional by your side. Let’s find one you’ll
            love.
          </p>
        </div>
        <div className="services--sellhome">
          <img src="" alt="" />
          <h3>
            <strong>SELL HOME</strong>
          </h3>
          <p>
            Do you know what your home is truly worth in our market? If you
            price too high, you won’t sell. If you price too low, you could be
            losing tens of thousands.
          </p>
        </div>
        <div className="services--localexpertise">
          <img src="" alt="" />
          <h3>
            <strong>LOCAL EXPERTISE</strong>
          </h3>
          <p>
            No matter your real estate needs, as a local expert in our market, I
            can assist! Whether you’re staying in town or moving out of state,
            I’ll simplify the process.
          </p>
        </div>
      </div>
    /* </div> */
  );
}
