"use client";
import { bubble as Menu } from "react-burger-menu";
import { styles } from "./styles";

const MenuHamburger = () => {
  return (
    <Menu left styles={styles}>
      <div className="flex flex-col justify-evenly w-full h-full">
        <img src="/next.svg" alt="" />
        <div className="flex flex-col items-center">
          <h1>Prénom Nom</h1>
          <h2>Mail</h2>
        </div>
        <ul className="text-2xl uppercase text-white pt-10">
          <li
            id="Acceuil"
            className="menu-item px-2"
            Link="/section/introduction.jsx"
          >
            Accueil
          </li>
          <li
            id="A Propos"
            className="menu-item px-2 py-6"
            Link="/section/services.jsx"
          >
            A Propos
          </li>
          <li id="Projets" className="menu-item px-2" Link="/projets">
            Projets
          </li>
          <li
            id="Parcours"
            className="menu-item px-2 py-6"
            Link="/section/formulaire.jsx"
          >
            Parcours
          </li>
          <li id="Contact" className="menu-item px-2" Link="/projets">
            Contact
          </li>
        </ul>
        <div className="grid grid-cols-3">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Menu>
  );
};

export default MenuHamburger;
