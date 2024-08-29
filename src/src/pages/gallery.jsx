import React from 'react'
import GalleryCard from '../compontent/galleryCard'
import Navbar from '../compontent/navbar';
import Footer from '../compontent/footer';
import BannerGallery from '../compontent/gallery-banner';
function Gallery() {
  return (
    <div className='main-Gallery'>
        <Navbar/>
        <BannerGallery/>
        <GalleryCard/>
        <Footer/>
    </div>
  )
}

export default Gallery
