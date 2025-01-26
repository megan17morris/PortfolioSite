import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import "./Skills.css";
import '../../App.css';
import skillsData from "./skillsData";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCaretLeft, faCaretRight, faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons';




const Carousel = ({items}) => { 
  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev" onClick={onClick}>
      {<FontAwesomeIcon icon={faChevronLeft} />}
    </div>
  );

  // Custom next arrow component
  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow next" onClick={onClick}>
      {<FontAwesomeIcon icon={faChevronRight} />}
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000, // Adjust autoplay speed as needed,
    prevArrow: <PrevArrow />, // Custom previous arrow component
    nextArrow: <NextArrow />, // Custom next arrow component
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div className="item" key={index}>
            <div className="item-container">
              {item}
              {/* Add more content here as needed */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;