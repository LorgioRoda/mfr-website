import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "../assets/styles/Components/Recommendations.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import starts from "../assets/static/star.svg";

export default class Recommendation extends Component {
  render() {
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
          interval={2000}
        >
          <div>
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
          </div>
          <div>
          <div className="recommendation">
        <div className="recommendation__card">
            <h3>Sakae Hokama</h3>
          <div className="card--start">
         </div>
            <img src={starts} alt="" />
            <div className="card--content">
              <p>
              I had just received a job offer in NYC. I had no idea about the process of renting an apartment in the city. ( I come from South Americs) Maria has helped us tremendously finding an apartment in NYC. She made us the favour of going to see the apartments in our behalf and provided us with feedbacks. She helped us with very useful recommendations about the buildings were the apartments were located, as well as with the neighborhood and its surroundings. She also helped us with the payments ( logistics of paying from an foreign country) and guarantor alternatives.
              She is very responsive and gives her 100% when working with you.
              </p>
            </div>
        </div>
      </div>
          </div>
          <div>
          <div className="recommendation">
        <div className="recommendation__card">
            <h3>Cristina Diez</h3>
          <div className="card--start">
         </div>
            <img src={starts} alt="" />
            <div className="card--content">
              <p>
                Maria is by far the most pleasant and efficient real estate agents I have encountered. Being able to work with her on numerous real estate transactions has been a pleasure and I look forward to many more! She helped my sister move into her NYC apartment in the financial district right on the Hudson River. She helped my sister find the perfect apartment with an incredible view! She couldn’t be happier. Thank you again for taking such great care of her. From one real estate professional to another, Maria is great at what she does. Highly recommend her!
              </p>
            </div>
        </div>
      </div>
          </div>
        </Carousel>
        <a href="https://www.google.com/search?q=maria+fernanda+roda&rlz=1C5CHFA_enBO943BO944&oq=maria+fernanda+roda&aqs=chrome.0.69i59j46i512l4j69i60l2j69i61.2175j0j4&sourceid=chrome&ie=UTF-8#lrd=0x89c259c0ba756683:0xef7985d9e0bfcfde,1,,," target="_blank" rel="noopener noreferrer">More reviews</a>
      </>
    );
  }
}
