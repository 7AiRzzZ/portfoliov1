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

const FooterDesktop = () => {
  return (
    <footer className="max-lg:hidden text-center w-full h-full text-white">
      <div className=" bg-black opacity-90 px-2 py-2  grid grid-cols-5 justify-center items-center  ">
        <Link
          className=" flex justify-center items-center "
          href={"https://github.com/7AiRzzZ"}
        >
          <FontAwesomeIcon
            className=" h-28 w-28 px-2 hover:text-gray-400"
            size="2xs"
            icon={faGithub}
          />
        </Link>
        <Link
          className=" flex justify-center items-center "
          href={"https://www.linkedin.com/in/maxence-dupre-468256280/"}
        >
          <FontAwesomeIcon
            className="h-28 w-28 px-2 hover:text-gray-400  hover:transition hover:ease-in-out hover:duration-150 hover:scale-110"
            size="2xs"
            icon={faLinkedin}
          />
        </Link>
        <Link
          className=" flex justify-center items-center "
          href={"https://discord.gg/6qj8zqFh"}
        >
          <FontAwesomeIcon
            className="h-28 w-28 px-2 hover:text-gray-400  hover:transition hover:ease-in-out hover:duration-150 hover:scale-110"
            size="2xs"
            icon={faDiscord}
          />
        </Link>
        <Link
          className=" flex justify-center items-center "
          href={"https://twitter.com/_AiRzzZ"}
        >
          <FontAwesomeIcon
            className="h-28 w-28 px-2 hover:text-gray-400  hover:transition hover:ease-in-out hover:duration-150 hover:scale-110 "
            size="2xs"
            icon={faTwitter}
          />
        </Link>
        <Link
          className=" flex justify-center items-center "
          href={"https://www.instagram.com/7Maxoouuu/?hl=fr"}
        >
          <FontAwesomeIcon
            className="h-28 w-28 px-2 hover:text-gray-400  hover:transition hover:ease-in-out hover:duration-150 hover:scale-110 "
            size="2xs"
            icon={faInstagram}
          />
        </Link>
      </div>
      <div className="bg-black text-xl py-1 flex flex-col-3 items-center justify-center">
        <Link href={""}>
          <p className=" hover:text-gray-400  ">©2023 Copyright.</p>
        </Link>
        <Link href={""}>
          <p className=" hover:text-gray-400  pl-2">Tous droits réservés.</p>
        </Link>
        <Link href={""}>
          <p className=" hover:text-gray-400  pl-2">Mentions légales.</p>
        </Link>
      </div>
    </footer>
  );
};

export default FooterDesktop;
