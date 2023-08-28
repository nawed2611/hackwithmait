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

function App() {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Hack with MAIT 4.0" />
        <meta name="description" content="Hack with MAIT 4.0 is coming soon!" />
        <meta name="keywords" content="Hack with MAIT 4.0, Hackathons, New Delhi, Engineering, Computer Science, GGSIPU, Devfolio Hackathons" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="HackwithMAIT 4.0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nawed2611" />
        <meta name="twitter:creator" content="@nawed2611" />
        <meta name="twitter:title" content="Nawed Ali" />
        <meta name="twitter:description" content="Hack with MAIT 4.0 is coming soon!" />
        <meta name="twitter:image" content="https://www.hackwithmait.co/assets/logo.d8d16c01.jpg" />
        <meta property="og:title" content="Hack with MAIT 4.0" />
        <meta property="og:description" content="Hack with MAIT 4.0 is coming soon!" />
        <meta property="og:image" content="https://www.hackwithmait.co/assets/logo.d8d16c01.jpg" />
        <meta property="og:url" content="https://www.hackwithmait.co" />
        <meta property="og:site_name" content="Hack with MAIT 4.0" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <title>Hack with MAIT 4.0</title>
        {/* Add favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.hackwithmait.co/assets/logo.d8d16c01.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.hackwithmait.co/assets/logo.d8d16c01.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://www.hackwithmait.co/assets/logo.d8d16c01.jpg" />
        <link rel="mask-icon" href="https://www.hackwithmait.co/assets/logo.d8d16c01.jpg" color="#5bbad5" />
        <link rel="shortcut icon" href="https://www.hackwithmait.co/assets/logo.d8d16c01.jpg" />
        <meta name="msapplication-TileColor" content="#4852db" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <div className="flex flex-col overflow-x-hidden ">
        <Hero />
        <About />
        <CarouselScreen />
        {/* <Speakers /> */}
        {/* <Tracks /> */}
        {/* <Schedule /> */}
        {/* <Sponsors /> */}
        <Team />
        <FAQ />
        <Footer />
      </div>
    </>
  )
}

export default App
