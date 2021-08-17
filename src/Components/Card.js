import React from "react";
import starts from "../assets/static/star.svg";

export default function Card({recommendation}) {
  return (
    <>
      <div className="recommendation">
        <div className="recommendation__card">
            <h3>{recommendation.name}</h3>
          <div className="card--start">
         </div>
            <img src={starts} alt="" />
            <div className="card--content">
              <p>
               {recommendation.testimonial}
              </p>
            </div>
        </div>
      </div>
    </>
  );
}
