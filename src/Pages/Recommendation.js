import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import Card from "../Components/Card";
import "../assets/styles/Components/Recommendations.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Recommendation extends Component {
  render() {
    const { recommendations } = this.props
    return (
      <>
        <div className="recommendation--title">
          <h3>Clients Testimonials</h3>
        </div>
        <Carousel
          showArrows={true}
          InfiniteLoop={true}
          showThumbs={false}
          showThumbs={false}
          autoPlay={true}
          interval={3900}
        >
         {recommendations.map((recommendation) => (
          <Card
            key={recommendation.id}
            recommendation={recommendation}
          />
        ))}
        </Carousel>
      </>
    );
  }
}
