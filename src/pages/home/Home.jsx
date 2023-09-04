import React from "react";
import "./Home.scss";
import Hero from "../../components/hero/Hero";
import TrustedBy from "../../components/trustedby/TrustedBy";
import Slide from "../../components/slide/Slide";
const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Slide heading="Popular Services" />
    </>
  );
};

export default Home;
