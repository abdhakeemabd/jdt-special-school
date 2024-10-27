import React from 'react'
import GalleryBanner from '../component/gallery-banner'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import GalleryCard from '../component/GalleryCard'

function Gallery() {
  return (
    <div>
      <Navbar/>
      <GalleryBanner/>
      <GalleryCard/>
      <Footer/>
    </div>
  )
}

export default Gallery