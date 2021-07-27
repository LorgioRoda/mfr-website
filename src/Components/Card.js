import React from "react";
import starts from "../assets/static/star.svg";

export default function Card() {
  return (
    <>
      <div className="recommendation">
        <div className="recommendation__card">
            <h3>Mariana Bernárdez S.</h3>
          <div className="card--start">
         </div>
            <img src={starts} alt="" />
            <div className="card--content">
              <p>
                In just two days of visiting apartments we found the perfect place
                for me, and under my budget! Fernanda got what I wanted very quickly
                and, unlike other realtors in the past, she only showed me
                apartments within my budget that I would be interested in. She was
                always very responsive, friendly, and willing to go the extra mile.
                She also helped my sister, who lived our of state, find her perfect
                place. I've already recommended her to everyone I know is looking
                for a place!
              </p>
            </div>
        </div>
      </div>
    </>
  );
}
