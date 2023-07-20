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
    <footer className=" bg-gray-200 text-center  text-white">
      <div className="px-4 py-1">
        <Link href={""}>
          <FontAwesomeIcon className="px-2 hover:text-black " icon={faGithub} />
        </Link>
        <Link href={""}>
          <FontAwesomeIcon
            className=" hover:text-black hover:transition hover:ease-in-out hover:duration-150 hover:scale-110"
            icon={faLinkedin}
          />
        </Link>
        <Link href={""}>
          <FontAwesomeIcon
            className="px-2  hover:text-black hover:transition hover:ease-in-out hover:duration-150 hover:scale-110"
            icon={faDiscord}
          />
        </Link>
        <Link href={""}>
          <FontAwesomeIcon
            className="  hover:text-black hover:transition hover:ease-in-out hover:duration-150 hover:scale-110 "
            icon={faTwitter}
          />
        </Link>
        <Link href={""}>
          <FontAwesomeIcon
            className=" px-2  hover:text-black hover:transition hover:ease-in-out hover:duration-150 hover:scale-110 "
            icon={faInstagram}
          />
        </Link>
      </div>
      <div className="bg-gray-300 text-xs te py-1 flex flex-col-3 items-center justify-center">
        <Link href={""}>
          <p className=" hover:text-black ">©2023 Copyright.</p>
        </Link>
        <Link href={""}>
          <p className=" hover:text-black pl-1">Tous droits réservés.</p>
        </Link>
        <Link href={""}>
          <p className=" hover:text-black pl-1">Mentions légales.</p>
        </Link>
      </div>
    </footer>
  );
};

export default FooterMobile;
