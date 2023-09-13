"use client";
import { bubble as Menu } from "react-burger-menu";
import { styles } from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const MenuHamburger = () => {
  const [closeMenu, setCloseMenu] = useState(false);

  const HideMenu = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <Menu left styles={styles} isOpen={closeMenu === true ? false : null}>
      <div className="flex flex-col justify-evenly w-full h-full">
        <div className=" flex justify-center items-center ">
          <a href="https://dupreportfolio.fr/">
            <Image
              src="/Images/maxence.png"
              width={150}
              height={150}
              alt="Maxence Dupre"
              className="rounded-full"
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-pixeloid text-2xl">
            Maxence <span className="uppercase font-pixeloidBold">Dupre</span>
          </h1>
          <a href="mailto:contact@dupre-portfolio.fr" className="text-sm text-center font-retrogaming">
            contact@dupre-portfolio.fr
          </a>
        </div>
        <ul className="text-2xl uppercase text-white pt-10 justify-center items-center flex flex-col font-pixeloid">
          <li className="menu-item px-2">
            <a href="http://localhost:3000">Accueil</a>
          </li>
          <li className="menu-item px-2 py-6">
            <AnchorLink
              href="#about"
              offset={() => 100}
              onClick={() => HideMenu()}
            >
              A Propos
            </AnchorLink>
          </li>
          <li className="menu-item px-2 pb-6 ">
            <AnchorLink
              href="#skills"
              offset={() => 100}
              onClick={() => HideMenu()}
            >
              Compétences
            </AnchorLink>
          </li>
          <li id="Projets" className="menu-item px-2" Link="/projets">
            <AnchorLink
              href="#projects"
              offset={() => 100}
              onClick={() => HideMenu()}
            >
              Projets
            </AnchorLink>
          </li>
          <li
            id="Parcours"
            className="menu-item px-2 py-6"
            Link="/section/formulaire.jsx"
          >
            <AnchorLink
              href="#timeline"
              offset={() => 100}
              onClick={() => HideMenu()}
            >
              Parcours
            </AnchorLink>
          </li>
          <li id="Contact" className="menu-item px-2" Link="/projets">
            <AnchorLink
              href="#contact"
              offset={() => 100}
              onClick={() => HideMenu()}
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
        <div className="grid grid-cols-3 pt-10">
          <div className="flex justify-center">
            <a href={"https://www.linkedin.com/in/maxence-dupre-468256280/"}>
              <AiFillLinkedin size={30} onClick={""} />
            </a>
          </div>

          <div className="flex justify-center">
            <a href={"https://github.com/7AiRzzZ"}>
              <AiFillGithub size={30} onClick={""} />
            </a>
          </div>
          <div className="flex justify-center">
            <a href={"https://www.instagram.com/7Maxoouuu/?hl=fr"}>
              <AiFillInstagram size={30} onClick={""} />
            </a>
          </div>
          <div className="font-retrogaming text-sm flex justify-center col-span-3 py-2">
            <span>&copy; Tous droits réservés</span>
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default MenuHamburger;
