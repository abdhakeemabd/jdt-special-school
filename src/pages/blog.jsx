import React from 'react'
import BlogBanner from '../component/blog-banner'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import BlogCard from '../component/blog-card'

function Blog() {
  return (
    <div>
      <Navbar/>
      <BlogBanner/>
      <BlogCard/>
      <Footer/>
    </div>
  )
}

export default Blog