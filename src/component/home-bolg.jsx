import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Slider1 from "../assets/img/main/5.jpg";
import Slider2 from "../assets/img/main/6.jpg";
import Slider3 from "../assets/img/main/7.jpg";
import Slider4 from "../assets/img/main/8.jpg";
import Slider5 from "../assets/img/main/9.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/home-blog.css'
function HomeBlog() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slickNav = useRef(null);
  const slickFor = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setNav1(slickNav.current);
    setNav2(slickFor.current);
  }, []);

  const slidesContent = [
    { imgSrc: Slider1, title: "Content 1", date: "14 Nov 2023", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ducimus?" },
    { imgSrc: Slider2, title: "Content 2", date: "14 Nov 2023", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ducimus?" },
    { imgSrc: Slider3, title: "Content 3", date: "14 Nov 2023", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ducimus?" },
    { imgSrc: Slider4, title: "Content 4", date: "14 Nov 2023", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ducimus?" },
    { imgSrc: Slider5, title: "Content 5", date: "14 Nov 2023", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ducimus?" }
  ];

  const settingsContent = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const settingsImages = {
    asNavFor: nav1,
    ref: slider => (slickFor.current = slider),
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <section className="blog-slider">
        <div className="slider-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5" data-aos="fade-up">
              <Slider className="left-slider" asNavFor={nav2} ref={slider => (slickNav.current = slider)} {...settingsContent}>
                {slidesContent.map((slide, index) => (
                  <div key={index}>
                    <div className="blog-cont">
                      <h3>{slide.title}</h3>
                      <h6 className="text-l-green">{slide.date}</h6>
                      <p>{slide.description}</p>
                      <Link to="/blogs">
                        <button className="btn-read-more">Read More</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="col-md-7 mt-3 mt-md-0" data-aos="fade-up">
              <Slider {...settingsImages}>
                {slidesContent.map((slide, index) => (
                  <div key={index}>
                    <img src={slide.imgSrc} className="img-fluid blog-slide-img rounded-5" alt={`slider img ${index}`} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default HomeBlog;
