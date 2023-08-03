import Button from "@/app/components/tools/button";
import Image from "next/image";

const NavbarDesktop = () => {
  return (
    <header >
      <nav className=" w-full lg:backdrop-blur-sm  lg:bg-black/90 lg:border-b-2 lg:border-b-black lg:shadow-xl ">
        <div className=" hidden lg:w-full lg:py-2 lg:flex lg:flex-row lg:items-center lg:justify-center">
          <Image
            className=" border px-2 border-black"
            src="/Images/ayanokoji.png"
            width={100}
            height={50}
            alt="Maxence Dupre"
          />
          <div className=" lg:w-full lg:py-2 lg:flex lg:flex-row lg:items-center lg:justify-center">
            <Button text={"Accueil"} />
            <Button text={"A propos"} />
            <Button text={"Projet"} />
            <Button text={"Parcours"} />
            <Button text={"Contact"} />
            <Image
              src="/Images/ayanokoji.png"
              width={50}
              height={50}
              alt="Maxence Dupre"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavbarDesktop;
