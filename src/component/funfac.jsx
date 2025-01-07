import React from 'react'
import Fac1 from '../assets/img/icons/1.png';
import Fac2 from '../assets/img/icons/2.png';
import Fac3 from '../assets/img/icons/3.png';
import '../assets/style/funfat.css'
function Funfac() {
  return (
    <div>
      <section className='fun-fact-section'>
        <div className='container'>
            <div className="col-12 col-md-12" data-aos="fade-down" data-aos-offset="10">
                <h2 className='sec-title text-white text-center'>Our Global Community </h2 >
                <p className='sec-dec text-white text-center'> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div> 
            <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-offset="10">
                   <div className="fun-factor">
                    <img alt='fac' src ={Fac1} />
                    <h2> <span  data-counter="27" className="timer">7 +</span></h2>
                    <p>Years Experience</p>
                   </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-offset="10">
                   <div className="fun-factor">
                    <img alt='fac' src ={Fac2} />
                    <h2> <span  data-counter="27" className="timer">30 +</span></h2>
                    <p>Stundets</p>
                   </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-offset="10">
                   <div className="fun-factor">
                    <img alt='fac' src ={Fac3} />
                    <h2> <span  data-counter="27" className="timer">10 +</span></h2>
                    <p>Teachers</p>
                   </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Funfac