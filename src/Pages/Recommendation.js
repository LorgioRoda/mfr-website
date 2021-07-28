import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import Card from "../Components/Card";
import "../assets/styles/Components/Recommendations.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Recommendation extends Component {
  render() {
    return (
      <>
        <div className="recommendation--title">
          <h2>Clients Testimonials</h2>
        </div>
        <Carousel
          showArrows={true}
          InfiniteLoop={true}
          showThumbs={false}
          showThumbs={false}
          autoPlay={true}
          interval={1500}
        >
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </Carousel>
      </>
    );
  }
}
