import React from 'react';
import '../style/home.css'
import '../style/icons.css'
import Navbar from '../compontent/navbar';
import IndexBanner from '../compontent/banner'
import BlogSlider from '../compontent/blogslider'
import HomeCourse from '../compontent/home-coures'
import CourseCard from '../compontent/course-card';
import Certifcate from '../compontent/certificate'
import Funfact from '../compontent/funfac';
import Testimonial from '../compontent/testimonial'
import Footer from '../compontent/footer';
function Home() { 
 
  return (
      <div className='main-home'>
        <Navbar/>  
        <IndexBanner/>
       <BlogSlider/>
        <HomeCourse/>
        <CourseCard/>
        <Certifcate/>
        <Funfact/>
        <Testimonial/>
       <Footer/>
    </div>
  )
}

export default Home
