import React from "react";
import "../assets/styles/Components/Recommendations.scss";
import maria from "../assets/static/Mafer.png";
import starts from "../assets/static/2A-5estrellas.svg";

export default function Recommendation() {
  return (
    <div className="recommendation">
      <h2>Clients Testimonials</h2>
      <p>
        Highlight the best of your properties by using the List Category
        shortcode. You can list categories, types, cities, areas and states of
        your choice.
      </p>
      <div className="recommendation__card">
        <div className="card--title"></div>
        <h3>Nombre</h3>
        <div className="card--image">
          <img src={maria} alt="" />
        </div>
        <div className="card--start">
          <img src={starts} alt="" />
        </div>
        <div className="card--content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          laudantium distinctio itaque, minus rerum ut. Esse, consectetur quidem
          tempore suscipit consequatur totam eos adipisci neque, voluptatibus
          corporis aut aliquid corrupti.
        </div>
      </div>
    </div>
  );
}
