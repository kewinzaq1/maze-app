import React from "react";
import AboutSection from "../components/AboutSection";
import BrazeSection from "../components/BrazeSection";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";

function Main() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <AboutSection />
      <BrazeSection />
    </>
  );
}

export default Main;
