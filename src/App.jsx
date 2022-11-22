import React, { useState } from 'react';
import Hero from './pages/Hero';
import About from './pages/About';

import Tracks from './pages/Tracks';
import Carousel from './pages/Carousel';
import Speakers from './pages/Speakers';
import Schedule from './pages/Schedule';
import Sponsors from './pages/Sponsors';
import Team from './pages/Team';
import Footer from './pages/Footer';

function App() {

  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Carousel />
      <Speakers />
      <Tracks />
      <Schedule />
      <Sponsors />
      <Team />
      <Footer />
    </div>
  )
}

export default App
