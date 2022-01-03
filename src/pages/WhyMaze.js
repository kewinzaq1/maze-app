import React from "react";
import HeroSection from "../components/whyMaze/HeroSection";
import InfoContainer from "../components/whyMaze/InfoContainer";
import TestiSection from "../components/shared/TestiSecion";
import TestiImage from "../assets/why-maze/testimonail/person.png";
import TestiLogo from "../assets/why-maze/testimonail/logo.png";
import TrySection from "../components/whyMaze/TrySection";

function WhyMaze() {
  return (
    <>
      <HeroSection />
      <InfoContainer />
      <TestiSection
        image={TestiImage}
        logo={TestiLogo}
        quots='"Maze enabled us to double the number of testing sessions with users before shipping a new feature!"'
        paragraph='Nicolas Berthozat, Cofounder at FairMoney'
        className='testi--violet'
      />
      <TrySection />
    </>
  );
}

export default WhyMaze;
