"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ParticlesProvider from "@/app/components/context/particlesProvider";
import Home from "./home";
import ReturnToTop from "@/app/components/tools/returnToTop";
import Footer from "@/app/components/layouts/footer";
import NavBar from "./components/layouts/navbar";

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
