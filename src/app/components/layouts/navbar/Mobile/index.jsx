"use client";

import { useContext, useState } from "react";
import { ParticlesContext } from "@/app/components/context/particlesProvider";

import MenuHamburger from "./menuHamburger";
import { LuToggleLeft, LuToggleRight } from "react-icons/lu";
import DarkMode from "@/app/components/tools/darkMode";
import ParticlesBackground from "@/app/components/tools/particles";

const NavbarMobile = () => {
  const { theme, setTheme } = useContext(ParticlesContext);
  const [showButton, setShowButton] = useState(false);

  return (
    <header>
      <nav className="w-full h-20 grid grid-cols-3 bg-black fixed top-0 z-50 lg:hidden">
        <div>
          <MenuHamburger />
        </div>
        <div className="flex justify-center items-center">
          <a href="http://localhost:3000">
            <img src="/Images/ayanokoji.png" alt="" width={50} height={50} />
          </a>
        </div>
        <div className="flex justify-center items-center">
          {showButton === false ? (
            <LuToggleLeft
              size={30}
              className="text-white"
              onClick={() => {
                setTheme("dark");
                setShowButton(true);
                DarkMode();
              }}
            />
          ) : (
            <LuToggleRight
              size={30}
              className="text-white"
              onClick={() => {
                setTheme("light");
                setShowButton(false);
                DarkMode();
              }}
            />
          )}
        </div>
      </nav>
      <ParticlesBackground color={theme} />
    </header>
  );
};

export default NavbarMobile;
