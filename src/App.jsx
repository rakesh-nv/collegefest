import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Highlights from './components/Highlights';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  // Smooth scroll polyfill for Safari/others if needed, 
  // though modern browsers handle 'scroll-behavior: smooth' in CSS
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        {/* <About /> */}
        {/* <Events /> */}
        <Gallery />
        <Highlights />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
