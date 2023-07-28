"use client";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesJson from "./particles.json";
import { useCallback, useEffect, useState } from "react";

const ParticlesBackground = () => {
  const [theme, setTheme] = useState("light");

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    // await loadSlim(engine);
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
      <button onClick={() => setTheme("light")}>Light</button>

      <button onClick={() => setTheme("dark")}>Dark</button>
      <Particles
        theme={theme}
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
