import React from 'react'
import AboutBanner from '../component/about-banner'
import AboutUs from '../component/aboutus'
import Funfac from '../component/funfac'
import Footer from '../component/footer'
import Navbar from '../component/navbar'
import Teachers from '../component/teacher'

function About() {
  return (
    <div>
      <Navbar/>
      <AboutBanner/>
      <AboutUs/>
      <Funfac/>
      <Teachers/>
      <Footer/>
    </div>
  )
}

export default About