"use client";

import Link from "next/link";
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
        <Link
          className=" flex justify-center items-center "
          href={"https://github.com/7AiRzzZ"}
        >
          <FontAwesomeIcon
            className="hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-green-700"
            size="2x"
            icon={faGithub}
          />
        </Link>
        <Link
          className=" flex justify-center items-center "
          href={"https://www.linkedin.com/in/maxence-dupre-468256280/"}
        >
          <FontAwesomeIcon
            className="hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-green-700"
            size="2x"
            icon={faLinkedin}
          />
        </Link>
        <Link
          className=" flex justify-center items-center "
          href={"https://discord.gg/6qj8zqFh"}
        >
          <FontAwesomeIcon
            className="hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-green-700"
            size="2x"
            icon={faDiscord}
          />
        </Link>
        <Link
          className=" flex justify-center items-center "
          href={"https://twitter.com/_AiRzzZ"}
        >
          <FontAwesomeIcon
            className="hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-green-700"
            size="2x"
            icon={faTwitter}
          />
        </Link>
        <Link
          className=" flex justify-center items-center "
          href={"https://www.instagram.com/7Maxoouuu/?hl=fr"}
        >
          <FontAwesomeIcon
            className="hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-green-700"
            size="2x"
            icon={faInstagram}
          />
        </Link>
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
