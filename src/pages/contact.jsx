import React, {useState} from 'react';
import Navbar from '../compontent/navbar'
import ContactBanner from '../compontent/contact-banner'
import ContactInfo from '../compontent/contactinfo'
import Footer from '../compontent/footer'
import '../style/contact.css'
function Contact() {
  const [loading,setLoading]=useState(false);
  return (
    <div>
     <Navbar/> 
     <ContactBanner/>
     <ContactInfo loading={loading} onClick={() => setLoading(!loading)}
      ></ContactInfo>
     <Footer/>
    </div>
  )
}

export default Contact
