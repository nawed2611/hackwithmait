import React, { useState, useEffect } from 'react';
import Hero from './pages/Hero';
import About from './pages/About';
import Tracks from './pages/Tracks';
import CarouselScreen from './pages/Carousel';
import Speakers from './pages/Speakers';
import Schedule from './pages/Schedule';
import Sponsors from './pages/Sponsors';
import FAQ from './pages/FAQ';
import Team from './pages/Team';
import Footer from './pages/Footer';

import Timeline from './pages/Timeline';
function App() {
  return (
    <div className="flex flex-col overflow-x-hidden ">
      <Hero />
      <About />
      <CarouselScreen />
      {/* <Speakers /> */}
      <Tracks />
      <Timeline/>
      {/* <Schedule /> */}
      <Sponsors />
      {/* <Team /> */}
      <FAQ />
      <Footer />
    </div>

  )
}

export default App
