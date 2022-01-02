import React from "react";
import AboutSection from "../components/AboutSection";
import BrazeSection from "../components/BrazeSection";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";

function Main() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <AboutSection />
      <BrazeSection />
      <ServicesSection />
    </>
  );
}

export default Main;
