import React, { Component } from "react";
import Slider from "react-slick";
import "./App.css";
// import nextArrow from './NextArrow';
// import prevArrow from './PrevArrow';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeSlide: 0,
      images: [
        { src: "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg", alt: "....", className: "image" },
        { src: "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg", alt: "....", className: "image" },
        { src: "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg", alt: "....", className: "image" },
        { src: "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property04.jpg", alt: "....", className: "image" },
        { src: "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg", alt: "....", className: "image" }
      ]
    };
  }
  render() {
    let settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 2,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    const imageClick = () => {
      console.log('Click');
    } 

    return (
      <div>
        <Slider {...settings}>
        {this.state.images.map((image, index) => {
          return (
            <div key={index}>
              <img className={image.className} src={image.src} />
            </div>
          );
        })}
        </Slider>
      </div>
    );
  }
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", fontSize: '40px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", fontSize: '40px' }}
      onClick={onClick}
    />
  );
}

export default App;
