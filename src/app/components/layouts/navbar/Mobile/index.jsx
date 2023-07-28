"use client";

import Image from "next/image";
import MenuHamburger from "./menuHamburger";
import DarkMode from "@/app/components/tools/darkMode";

const NavbarMobile = () => {
  return (
    <header>
      <nav className="w-full flex fixed top-0 z-50 lg:hidden">
        <MenuHamburger />
        <div className=" text-white text-2xl bg-black h-20 grid grid-cols-3 w-full">
          <div className="col-start-1"></div>
          <h1 className="text-center col-start-2 flex items-center pl-5">
            Portfolio
          </h1>
          <div
            className="flex justify-center items-center col-start-3"
            onClick={() => DarkMode()}
          >
            <Image
              src="/Images/ayanokoji.png"
              width={40}
              height={40}
              alt="Maxence Dupre"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarMobile;
