import React from "react";
import Conversation from "../components/comunity/Conversation";
import Events from "../components/comunity/Events";
import Hero from "../components/comunity/Hero";
import Involved from "../components/comunity/Involved";

function Comunity() {
  return (
    <main>
      <Hero />
      <Involved />
      <Events />
      <Conversation />
    </main>
  );
}

export default Comunity;
