import React from "react";
import FAQ from "../components/pricing/FAQ";
import Hero from "../components/pricing/Hero";
import Testimonails from "../components/pricing/Testimonails";
import TrySection from "../components/shared/TrySection";

function Pricing() {
  return (
    <>
      <main>
        <Hero />
        <Testimonails />
        <FAQ />
        <TrySection />
      </main>
    </>
  );
}

export default Pricing;
