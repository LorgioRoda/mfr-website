import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "../assets/styles/Components/Recommendations.scss";
import maria from "../assets/static/Mafer.png";
import starts from "../assets/static/2A-5estrellas.svg";

export default class Recommendation extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        InfiniteLoop={true}
        showThumbs={false}
        showThumbs={false}
        autoPlay={true}
        interval={6100}
      >
        <div className="recommendation">
          <h2>Clients Testimonials</h2>
          <p>
            Highlight the best of your properties by using the List Category
            shortcode. You can list categories, types, cities, areas and states
            of your choice.
          </p>
          <div className="recommendation__card">
            <div className="card--title">
              <h3>Mariana Bernárdez S.</h3>
            </div>
            <div className="card--start">
              <img src={starts} alt="" />
            </div>
            <div className="card--content">
            In just two days of visiting apartments we found the perfect place for me, and under my budget! Fernanda got what I wanted very quickly and, unlike other realtors in the past, she only showed me apartments within my budget that I would be interested in. She was always very responsive, friendly, and willing to go the extra mile. She also helped my sister, who lived our of state, find her perfect place. I've already recommended her to everyone I know is looking for a place!
            </div>
          </div>
        </div>
      </Carousel>
    );
  }
}
