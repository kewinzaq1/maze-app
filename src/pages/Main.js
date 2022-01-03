import React from "react";
import AboutSection from "../components/home/AboutSection";
import TestiSecion from "../components/shared/TestiSecion";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import Testimonials from "../components/home/Testimonials";
import brazeLogo from "../assets/braze/logo.png";
import brazeWoman from "../assets/braze/woman.png";

function Main() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <AboutSection />
      <TestiSecion
        image={brazeWoman}
        logo={brazeLogo}
        quots='"Using Maze has supercharged our product design process and made it possible to drive faster turnaround times, speeding up product iteration and making for a better, faster user experience."'
        paragraph='Yuna Akazawa, Product Designer at Braze'
      />
      <ServicesSection />
    </>
  );
}

export default Main;
