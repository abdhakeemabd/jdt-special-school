import { BrowserRouter as Router, Route,Routes}from "react-router-dom";
import React, { useEffect } from 'react';
import './App.css'
import AOS from 'aos';
import './assets/style/boostrap/bootstrap.css'
import './assets/style/modules/aos.css'
import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import ScrollToTop from "./component/scrooltop";
// import AOS from 'aos';
import 'aos/dist/aos.css'; 
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    
   <>
    <Router> 
       <ScrollToTop/>    
    <Routes>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/blogs" element={<Blog/>} />
    <Route path="/gallery" element={<Gallery/>} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </Router>
   </>
  )
}

export default App
