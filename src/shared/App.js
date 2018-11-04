import React from "react";
import Slider from "react-slick";
import "./App.css";

class App extends React.Component {
  render() {
    let settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (

      <Slider {...settings}>
        <div>
          <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg"/>
        </div>
        <div>
        <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg"/>
        </div>
        <div>
        <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg"/>
        </div>
        <div>
        <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property04.jpg"/>
        </div>
        <div>
        <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg"/>
        </div>
      </Slider>
    );
  }
}

export default App;


