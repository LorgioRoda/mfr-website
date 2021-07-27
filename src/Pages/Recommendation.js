import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import Card from "../Components/Card";
import "../assets/styles/Components/Recommendations.scss";


export default class Recommendation extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        InfiniteLoop={true}
        showThumbs={false}
        showThumbs={false}
        autoPlay={true}
        interval={100}
      >
        <div>
          <div className="recommendation--title">
            <h2>Clients Testimonials</h2>
          </div>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </Carousel>
    );
  }
}
