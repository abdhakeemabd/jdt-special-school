import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/footer.css';
import Map from '../assets/img/icons/map.png';
import Phone from '../assets/img/icons/phone.png'
import Mail from '../assets/img/icons/mail.png'
import Logo from "../assets/img/logo/logo-t.png";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

import {  FaLinkedinIn, FaFacebookF } from "react-icons/fa";


function Footer() {
  return (
    <div>
      <footer className='footer pb-0'>
       <div className="footer-top">
       <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="logo">
                  <img className='logo' src={Logo} alt="" />
                </div>
                <p className='ms-3'>JDT Islam Orphanage & Educational Institutions, established in 1922, is a charitable educational institution. The institution works for the welfare, care and upliftment of orphaned and destitute children.</p>
              </div>
              <div className="col-md-3">
              <h3 className="widget-title">Explore</h3>
                <ul className='footer-contact'>
                <Link to={"/"}> <li > Home</li></Link>
                <Link to={"/about"}><li>About</li></Link>
                <Link to={"/blogs"}><li>Blog</li></Link>
                <Link to={"/gallery"}><li>Gallery</li></Link>
                <Link to={"/contact"}><li>Contact</li></Link>
                </ul>
              </div>
              <div className="col-md-3">
                <h3 className="widget-title">Contact</h3>
                <div className="d-flex align-items-center mb-3">
                  <img className='icons' src={Map} alt="" />
                  <div className="d-block ms-2">
                    <a>JDT Islam, Jamiath Hill,
                      Marikunnu P O, Calicut - 12,
                      Kerala, India
                    </a>
                 </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <img className='icons' src={Phone} alt="" />
                  <div className="d-block ms-2">
                    <a className='d-block' href='tel:+91 4952731420'>+91 4952 731 420</a>
                    <a className='d-block' href='tel:+91 4952731420'>+91 4952 731 420</a>
                 </div>
                </div>
                <div className="d-flex align-items-center">
                  <img className='icons' src={Mail} alt="" />
                  <div className="d-block ms-2">
                    <a className='d-block' href='mailto:jdtislamclt12@gmail.com'>jdtislamclt12@gmail.com</a>
                    <a className='d-block' href='mailto:jdtislamclt12@gmail.com'>info@jdtislam.org</a>
                 </div>
                </div>
              </div>
            </div>
        </div>
       </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
            <div className="col-md-6 text-white text-center">
                  <div className='mb-0'> Copyright © {new Date().getFullYear()}. All Rights Reserved.</div>
            </div>
            <div className="col-md-6 text-end text-white">
             <ul className='social-links d-flex flex-wrap'>
              <li> <a href="https://www.youtube.com/jdtislamonline"> <IoLogoYoutube /></a> </li>
              <li><a href="https://www.instagram.com/jdtislamofficial"><RiInstagramFill /></a></li>
              <li><a href="https://www.facebook.com/jdtislamofficial"><FaFacebookF /></a></li>
              <li><a href="#"><FaLinkedinIn /></a></li>
             </ul>

            </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer