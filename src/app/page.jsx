"use client";

import Footer from "./components/layouts/footer";
import NavBar from "./components/layouts/navbar";
import Home from "./home";
import ParticlesProvider from "./components/context/particlesProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ReturnToTop from "./components/tools/returnToTop";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <ParticlesProvider>
      <NavBar />
      <Home />
      <Footer />
      <ReturnToTop />
    </ParticlesProvider>
  );
};

export default HomePage;
