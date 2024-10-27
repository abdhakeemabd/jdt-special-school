import React from 'react'
import '../assets/style/home-about.css'
import About from "../assets/img/icons/about.png";
import AboutH from "../assets/img/icons/about-h.png";
import College from "../assets/img/icons/college.png";
import CollegeH from "../assets/img/icons/college-h.png";
import Hostel from "../assets/img/icons/hostel.png";
import HostelH from "../assets/img/icons/hostel-h.png";
import ActivitiyH from "../assets/img/icons/activities-h.png";
import Activitiy from "../assets/img/icons/activities.png";

function HomeAbout() {
  return (
    <div>
      <section className='home-about-sec'>
        <div className="container">
          <div className="row">
              <div className="col-md-3 mb-3 p-md-0" data-aos="fade-up">
                  <div className="sm-card mb-5 mb-md-0">
                    <div className='icons'>
                      <img src={About} className='img-fluid' alt="" />
                      <img src={AboutH} className='img-fluid' alt="" />
                    </div>
                    <h4 className='text-uppercase'>about us</h4>
                    <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, placeat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, obcaecati.</p>
                  </div>
              </div>
              <div className="col-md-3 mb-3 p-md-0" data-aos="fade-up">
                  <div className="sm-card mb-5 mb-md-0">
                    <div className='icons'>
                      <img src={College} className='img-fluid' alt="" />
                      <img src={CollegeH} className='img-fluid' alt="" />
                    </div>
                    <h4 className='text-uppercase'>Academics</h4>
                    <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, placeat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, obcaecati.</p>
                  </div>
              </div>
              <div className="col-md-3 mb-3 p-md-0" data-aos="fade-up">
                  <div className="sm-card mb-5 mb-md-0">
                    <div className='icons'>
                      <img src={Hostel} className='img-fluid' alt="" />
                      <img src={HostelH} className='img-fluid' alt="" />
                    </div>
                    <h4 className='text-uppercase'>Hostel</h4>
                    <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, placeat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, obcaecati.</p>
                  </div>
              </div>
              <div className="col-md-3 mb-3 p-md-0" data-aos="fade-up">
                  <div className="sm-card mb-5 mb-md-0">
                    <div className='icons'>
                      <img src={Activitiy} className='img-fluid' alt="" />
                      <img src={ActivitiyH} className='img-fluid' alt="" />
                    </div>
                    <h4 className='text-uppercase'>Student Activites</h4>
                    <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, placeat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, obcaecati.</p>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeAbout