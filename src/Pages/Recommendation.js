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
        interval={3100}
      >
       <h2>Clients Testimonials</h2>
        <p>
          Highlight the best of your properties by using the List Category
          shortcode. You can list categories, types, cities, areas and states of
          your choice.
        </p>
      <Card/>
      <Card/>
      </Carousel>
    );
  }
}
