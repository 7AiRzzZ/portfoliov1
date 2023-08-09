"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ParticlesProvider from "@/app/components/context/particlesProvider";
import NavBar from "@/app/components/layouts/navbar";
import Home from "./home";
import Footer from "@/app/components/layouts/footer";
import ReturnToTop from "@/app/components/tools/returnToTop";

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
