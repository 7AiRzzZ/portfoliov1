import Button from "@/app/components/tools/button";
import Image from "next/image";
import { useContext, useState } from "react";
import { ParticlesContext } from "@/app/components/context/particlesProvider";
import { LuToggleLeft, LuToggleRight } from "react-icons/lu";
import DarkMode from "@/app/components/tools/darkMode";

const NavbarDesktop = () => {
  const { theme, setTheme } = useContext(ParticlesContext);
  const [showButton, setShowButton] = useState(false);

  return (
    <header>
      <nav className="hidden fixed top-0 z-50 lg:flex w-full lg:backdrop-blur-sm lg:bg-black/90 lg:border-b-2 lg:border-b-black lg:shadow-xl ">
        <div className="w-full flex flex-row justify-evenly">
          <div className="flex items-center justify-center text-white">
            <h1>MAXENCE DUPRE</h1>
          </div>
          <div className="">
            <ul className="flex flex-row justify-evenly">
              <li>
                <Button text={"A propos"} />
              </li>
              <li className="px-8">
                <Button text={"Compétences"} />
              </li>
              <li>
                <Button text={"Projets"} />
              </li>
              <li className="px-8">
                <Button text={"Parcours"} />
              </li>
              <li>
                <Button text={"Contact"} />
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            {showButton === false ? (
              <LuToggleLeft
                size={30}
                className="text-white cursor-pointer"
                onClick={() => {
                  setTheme("dark");
                  setShowButton(true);
                  DarkMode();
                }}
              />
            ) : (
              <LuToggleRight
                size={30}
                className="text-white cursor-pointer"
                onClick={() => {
                  setTheme("light");
                  setShowButton(false);
                  DarkMode();
                }}
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavbarDesktop;
