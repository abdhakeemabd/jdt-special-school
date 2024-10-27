import React from 'react'
import GalleryBanner from '../component/gallery-banner'
import Navbar from '../component/navbar'
import Footer from '../component/footer'

function Gallery() {
  return (
    <div>
      <Navbar/>
      <GalleryBanner/>
      <Footer/>
    </div>
  )
}

export default Gallery