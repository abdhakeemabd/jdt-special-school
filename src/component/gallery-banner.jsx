import React from 'react'
import '../assets/style/page-banner.css'
import { Link } from 'react-router-dom'
function GalleryBanner() {
  return (
    <div>
        <section className='page_banner'>
            <div className='container'>
                <div className="content text-white page-banner-content" data-aos="fade-down" data-aos-offset="10">
                <h3>Gallery</h3>
                <h6 className='mt-3 mb-3'><span className='text-l-white'><Link className='text-white' to="/">Home</Link> /</span> Gallery</h6>
                </div>
            </div>
        </section>
    </div>
  )
}

export default GalleryBanner