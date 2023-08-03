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

const FooterMobile = () => {
  return (
    <footer className="  text-center text-white">
      <div className=" bg-black opacity-90 px-2 py-2 w-full h-full grid grid-cols-5 justify-center items-center  ">
        <Link href={""}>
          <FontAwesomeIcon
            className=" px-2 hover:text-gray-400 "
            size="2xs"
            icon={faGithub}
          />
        </Link>
        <Link href={""}>
          <FontAwesomeIcon
            className="px-2 hover:text-gray-400  hover:transition hover:ease-in-out hover:duration-150 hover:scale-110"
            size="2xs"
            icon={faLinkedin}
          />
        </Link>
        <Link href={""}>
          <FontAwesomeIcon
            className=" px-2 hover:text-gray-400  hover:transition hover:ease-in-out hover:duration-150 hover:scale-110"
            size="2xs"
            icon={faDiscord}
          />
        </Link>
        <Link href={""}>
          <FontAwesomeIcon
            className="px-2 hover:text-gray-400  hover:transition hover:ease-in-out hover:duration-150 hover:scale-110 "
            size="2xs"
            icon={faTwitter}
          />
        </Link>
        <Link href={""}>
          <FontAwesomeIcon
            className=" px-2 hover:text-gray-400  hover:transition hover:ease-in-out hover:duration-150 hover:scale-110 "
            size="2xs"
            icon={faInstagram}
          />
        </Link>
      </div>
      <div className="bg-black  text-xs te py-1 flex flex-col-3 items-center justify-center">
        <Link href={""}>
          <p className=" hover:text-gray-400  ">©2023 Copyright.</p>
        </Link>
        <Link href={""}>
          <p className=" hover:text-gray-400  pl-1">Tous droits réservés.</p>
        </Link>
        <Link href={""}>
          <p className=" hover:text-gray-400  pl-1">Mentions légales.</p>
        </Link>
      </div>
    </footer>
  );
};

export default FooterMobile;
