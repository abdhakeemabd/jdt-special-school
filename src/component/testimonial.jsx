import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../assets/style/testimonial.css'
import Favas from "../assets/img/testimonial/user.png"

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div>
      <section className="testimonial" data-aos="fade-up" data-aos-offset="10">
        <div className="container">
          <div className="overflow-hidden">
            <div className="col-12 text-center mb-5">
              <h4 className="mb-1 mt-3">Testimonials</h4>
              <h5 className="mb-3 mt-1">Lorem ipsum dolor sit amet.</h5>
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-10 col-md-12 text-center shadow-normal rounded-5 bg-white">
                  <Slider {...settings}>
                    {data.map((d, index) => (
                      <div key={index} className="testi-cont flex flex-col justify-center items-center">
                        <p className="truncate-5">{d.review}</p>
                        <div className="testi-head d-flex justify-content-center mb-3">
                          <img src={d.img} alt="User" className="test-img img-fluid" />
                        </div>  
                        <h4 className="text-xl-semibold">{d.name}</h4>
                        <h6 className="text-xl-semibold">{d.possion}</h6>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const data = [
  {
    name: 'Muhammed Favas',
    img: Favas,
    review: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.',
    possion: 'Principal'
  },
  {
    name: 'Muhammed Junaid',
    img: Favas,
    review: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.',
    possion: 'Principal'
  },
  {
    name: 'Abdul Raheem',
    img: Favas,
    review: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.',
    possion: 'Vice-Principal'
  }
]

export default Testimonial
