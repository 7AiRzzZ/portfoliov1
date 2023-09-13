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

const M = () => {
  return (
    <footer className="lg:hidden text-center text-white">
      <hr />
      <div className=" bg-black opacity-90 px-2 py-4 w-full h-full grid grid-cols-5 justify-center items-center  ">
        <a href={"https://github.com/7AiRzzZ"}>
          <FontAwesomeIcon
            className=" px-2 hover:text-gray-400 "
            size="lg"
            icon={faGithub}
          />
        </a>
        <a href={"https://www.linkedin.com/in/maxence-dupre-468256280/"}>
          <FontAwesomeIcon
            className="px-2 hover:text-gray-400  hover:transition hover:ease-in-out hover:duration-150 hover:scale-110"
            size="lg"
            icon={faLinkedin}
          />
        </a>
        <a href={"https://discord.gg/528hWKN6RK"}>
          <FontAwesomeIcon
            className=" px-2 hover:text-gray-400  hover:transition hover:ease-in-out hover:duration-150 hover:scale-110"
            size="lg"
            icon={faDiscord}
          />
        </a>
        <a href={"https://twitter.com/_AiRzzZ"}>
          <FontAwesomeIcon
            className="px-2 hover:text-gray-400  hover:transition hover:ease-in-out hover:duration-150 hover:scale-110 "
            size="lg"
            icon={faTwitter}
          />
        </a>
        <a href={"https://www.instagram.com/7Maxoouuu/?hl=fr"}>
          <FontAwesomeIcon
            className=" px-2 hover:text-gray-400  hover:transition hover:ease-in-out hover:duration-150 hover:scale-110 "
            size="lg"
            icon={faInstagram}
          />
        </a>
      </div>
      <hr />
      <div className="bg-black  text-xs te py-4 flex flex-col items-center justify-center">
        <p className=" hover:text-gray-400">&copy; 2023 Copyright.</p>
        <p className=" hover:text-gray-400 pl-1">Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default M;
