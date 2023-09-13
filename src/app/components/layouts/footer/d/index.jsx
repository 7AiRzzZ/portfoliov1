"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faLinkedin,
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const D = () => {
  return (
    <footer className="hidden lg:flex lg:flex-col text-center w-full h-full text-white">
      <hr />
      <div className="py-4 bg-black opacity-90 grid grid-cols-5 justify-center items-center  ">
        <a
          className=" flex justify-center items-center "
          href={"https://github.com/7AiRzzZ"}
        >
          <FontAwesomeIcon
            className="hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-blue-400"
            size="2x"
            icon={faGithub}
          />
        </a>
        <a
          className=" flex justify-center items-center "
          href={"https://www.linkedin.com/in/maxence-dupre-468256280/"}
        >
          <FontAwesomeIcon
            className="hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-blue-400"
            size="2x"
            icon={faLinkedin}
          />
        </a>
        <a
        
          className=" flex justify-center items-center "
          href={"https://discord.gg/528hWKN6RK"}
        >
          <FontAwesomeIcon
            className="hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-blue-400"
            size="2x"
            icon={faDiscord}
          />
        </a>
        <a
          className=" flex justify-center items-center "
          href={"https://twitter.com/_AiRzzZ"}
        >
          <FontAwesomeIcon
            className="hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-blue-400"
            size="2x"
            icon={faTwitter}
          />
        </a>
        <a
          className=" flex justify-center items-center "
          href={"https://www.instagram.com/7Maxoouuu/?hl=fr"}
        >
          <FontAwesomeIcon
            className="hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-blue-400"
            size="2x"
            icon={faInstagram}
          />
        </a>
      </div>
      <hr />
      <div className="bg-black text-xl flex flex-col py-6 items-center justify-center">
        <p className="">&copy; 2023 - {new Date().getFullYear()}</p>
        <p className="">Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default D;
