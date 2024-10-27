import React from 'react'
import Navbar from '../component/navbar'
import HomeBanner from '../component/home-banner'
import HomeBolg from '../component/home-bolg'
import Testimonial from '../component/testimonial';
import Funfac from '../component/funfac';
import HomeAbout from '../component/home-about';
import Footer from '../component/footer';

function Home() {
  return (
    <div>
        <Navbar/>   
        <HomeBanner/>
        <HomeAbout/>
        <HomeBolg/>
        <Funfac/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home