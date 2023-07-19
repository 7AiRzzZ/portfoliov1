"use client";
import { slide as Menu } from "react-burger-menu";
import { styles } from "../styles";
import Link from "next/link";
import Image from "next/image";
import { headers } from "next/dist/client/components/headers";

const NavbarMobile = () => {
  return (
    <header>
      <div className="flex flex-row items-center bg-gray-300  py-4 justify-end pr-4">
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

      <Menu  styles={styles}>
        <div className=" flex flex-row justify-center w-full ">
          
        </div>
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
          <li id="Projets" className="menu-item px-2 list-disc" Link="/projets">
            Projets
          </li>
          <li
            id="Parcours"
            className="menu-item px-2 py-6 list-disc"
            Link="/section/formulaire.jsx"
            >
            Parcours
          </li>
          <li id="Contact" className="menu-item px-2 list-disc" Link="/projets">
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
    </header>
  );
};

export default NavbarMobile;
