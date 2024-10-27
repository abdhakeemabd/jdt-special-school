import React from 'react'
import Navbar from '../component/navbar'
import ContactBanner from '../component/contact-banner'
import Footer from '../component/footer'
import ContactForm from '../component/contact-form'
import '../assets/style/contact.css';
function Contact() {
  return (
    <div>
      <Navbar/>
      <ContactBanner/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact