import React from "react";
import Hero from "../components/enterprise/Hero";
import Info from "../components/enterprise/Info";
import Reports from "../components/enterprise/Reports";
import TestiSecion from "../components/shared/TestiSecion";

import woman from "../assets/enterpirce/testi/woman.png";
import brand from "../assets/enterpirce/testi/brand.png";
import Contact from "../components/enterprise/Contact";
import Security from "../components/enterprise/Security";
import GoodHands from "../components/enterprise/GoodHands";
import ServicesSection from "../components/home/ServicesSection";

function Enterprise() {
  return (
    <>
      <main>
        <Hero />
        <Info />
        <Reports />
        <TestiSecion
          image={woman}
          logo={brand}
          quots='“Now everyone is taking the reins and are able to set up tests on their own - making the designs themselves to run different variations.”'
          paragraph='Melany Valderamma, Senior Interaction Designer at GE'
        />
        <Contact />
        <Security />
        <GoodHands />
        <ServicesSection />
      </main>
    </>
  );
}

export default Enterprise;
