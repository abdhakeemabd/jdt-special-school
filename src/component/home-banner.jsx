import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Home1 from '../assets/img/home/11.jpg';
import Home2 from '../assets/img/home/banner2.jpg';
import Home3 from '../assets/img/home/banner1.jpg';
import '../assets/style/homebanner.css';


const AutoplaySlider = withAutoplay(AwesomeSlider);

function HomeBanner() {
  return (
    <div className='home-banner-sec'>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
      >
        <div className='banner-cover'>
          <img className='banner-img' src={Home1} alt="Banner 1" />
          <div className="caption">
           <div className="container">
            <h1>The Best Kindergarten </h1>
            <h1>School For Your Child</h1>
           </div>
          </div>
        </div>
        <div className='banner-cover'>
          <img className='banner-img' src={Home2} alt="Banner 2" />
          <div className="caption">
           <div className="container">
            <h1>The Best Kindergarten </h1>
            <h1>School For Your Child</h1>
           </div>
          </div>
        </div>
        <div className='banner-cover'>
          <img className='banner-img' src={Home3} alt="Banner 3" />
          <div className="caption">
           <div className="container">
            <h1>The Best Kindergarten </h1>
            <h1>School For Your Child</h1>
           </div>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
}

export default HomeBanner;
