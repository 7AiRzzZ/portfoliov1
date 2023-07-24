"use client";
import { bubble as Menu } from "react-burger-menu";
import { useCallback } from "react";
import { styles } from "../styles";
import Link from "next/link";
import Image from "next/image";
import { headers } from "next/dist/client/components/headers";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesJson from "./particles.json";

const NavbarMobile = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    // await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <header>
      
      <div className="flex flex-row items-center bg-gray-200  py-4 justify-end pr-4">
        <nav>
          <Image
            src="/Images/ayanokoji.png"
            width={40}
            height={40}
            alt="Maxence Dupre"
          />
        </nav>
      </div>
      <div>
        <Menu styles={styles}>
          <div className=" flex flex-row justify-center w-full "></div>
          <ul className="text-2xl uppercase text-white ">
            <li
              id="Acceuil"
              className="menu-item px-2 list-disc"
              Link="/section/introduction.jsx"
            >
              Acceuil
            </li>
            <li
              id="A Propos"
              className="menu-item px-2 py-6 list-disc"
              Link="/section/services.jsx"
            >
              A Propos
            </li>
            <li
              id="Projets"
              className="menu-item px-2 list-disc"
              Link="/projets"
            >
              Projets
            </li>
            <li
              id="Parcours"
              className="menu-item px-2 py-6 list-disc"
              Link="/section/formulaire.jsx"
            >
              Parcours
            </li>
            <li
              id="Contact"
              className="menu-item px-2 list-disc"
              Link="/projets"
            >
              Contact
            </li>
            <li className="menu-item--small" href=""></li>
            <br />
            <div className="w-full flex flew-row -mx-6 pt-16">
              <li className="  px-3"></li>
            </div>
          </ul>
        </Menu>
      </div>

     
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesJson}
        />
       
      
    </header>
  );
};

export default NavbarMobile;
