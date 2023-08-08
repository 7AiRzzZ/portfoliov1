"use client";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesJson from "./particles.json";
import { useCallback, useEffect, useState, useContext } from "react";
import { ParticlesContext } from "@/app/components/context/particlesProvider";

const ParticlesBackground = ({ color }) => {
  const { theme, setTheme } = useContext(ParticlesContext);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const [particlesContainer, setParticlesContainer] = useState();

  const particlesLoaded = useCallback((container) => {
    setParticlesContainer(container);
  }, []);

  useEffect(() => {
    if (particlesContainer && particlesContainer.currentTheme !== theme) {
      particlesContainer.loadTheme(theme);
    }
  }, [theme, particlesContainer]);

  return (
    <>
      <Particles
        theme={color}
        id="tsparticles"
        particlesLoaded="particlesLoaded"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesJson}
      />
    </>
  );
};

export default ParticlesBackground;
