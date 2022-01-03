import React from "react";
import AboutSection from "../components/home/AboutSection";
import BrazeSection from "../components/home/BrazeSection";
import Footer from "../components/shared/Footer";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import Testimonials from "../components/home/Testimonials";

function Main() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <AboutSection />
      <BrazeSection />
      <ServicesSection />
      <Footer />
    </>
  );
}

export default Main;
