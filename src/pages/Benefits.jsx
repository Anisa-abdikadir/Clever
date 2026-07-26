import React from 'react'
import Hero from "../components/Benefits-Section One/Hero";
import Platforms from"../components/BenefitsSectionTwo/Platforms"
import Status from '../components/BenefitsSectionTwo/Status';
import Features from'../components/Features/Features';
import OurProduct from'../components/Features/OurProduct';
import HowItWorks from "../pages/HowItWorks"
import Testimonials from"../pages/Testimonials"

function Benefits() {
  return (
    <div>
        <Hero/>
        <Platforms/>
        <Status/>
        <Features/>
        <OurProduct/>
        <HowItWorks/>
        <Testimonials/>
      
    </div>
  )
}

export default Benefits
