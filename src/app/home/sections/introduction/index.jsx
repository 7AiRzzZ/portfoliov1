import Image from "next/image";
import Card from "@/app/components/tools/card";
import Titre from "@/app/components/tools/titre";
import { TypeAnimation } from "react-type-animation";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsArrowDown } from "react-icons/bs";


const Introduction = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center dark:text-white">
        <div className="flex flex-col text-center justify-center text-xl lg:h-52 lg:justify-center lg:items-center lg:py-16 lg:px-32">
          <section id="accueil">
            <h1 className="font-pixeloid pt-20 lg:uppercase lg:text-bold lg:py-2 lg:text-5xl lg:pt-20">
              Bonjour, je suis
              <br />
              Maxence <span className="font-bold uppercase">DUPRE </span>!
            </h1>
            <p className=" font-pixeloid pt-6 lg:uppercase lg:text-bold lg:py-2 lg:text-5xl lg:pt-20">
              Je suis un
              <br />
              développeur web
            </p>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Front-End",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Back-End",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="font-pixeloid lg:text-5xl"
              repeat={Infinity}
            />
          </section>
          <div className="flex flex-col pt-6 pb-20 lg:flex-row lg:pt-8 ">
            <div className="hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-blue-400">
              <a href="https://www.canva.com/design/DAEkTdMI4SU/zZAyE-niYIzBND_ELfwWkA/view">
                <button className=" font-pixeloid mb-1 px-4 lg:mb-0 lg:ml-4 border-2 rounded-full lg:px-6 lg:py-2 border-black dark:border-white ">
                  Mon Cv
                </button>
              </a>
            </div>
            <AnchorLink href="#projects" offset={() => 100}>
              <div className="hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-blue-400">
                <button className=" font-pixeloid mt-1 px-2  lg:mt-0 lg:ml-4  border-2 rounded-full lg:px-6 lg:py-2  border-black dark:border-white ">
                  Mes projets
                </button>
              </div>
            </AnchorLink>
          </div>

          <div className="flex justify-center items-center">
            <AnchorLink offset={() => 100} href="#about">
              <BsArrowDown className=" arrow bounce" size={30} onClick={""} />
            </AnchorLink>
          </div>
        </div>
      </div>
      <section className="" id="about">
        <div className="w-full lg:text-center lg:mt-16 lg:mx-4 lg:my-4 lg:flex lg:justify-start lg:items-start">
          <Titre id="à propos" className={"dark:text-white px-4"}>
            <h1 className="uppercase py-1 lg:text-4xl">à propos</h1>
          </Titre>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:mx-4">
          <Card className="dark:border-white flex items-center justify-center  dark:bg-blue-400/70  lg:py-4 lg:px-4 my-4 mx-4  lg:flex lg:justify-center lg:items-center">
            <div className="flex flex-col justify-center items-center px-8 lg:px-8 lg:grid lg:grid-cols-2">
              <div className="pb-8 ">
                <Image
                  className="rounded-full flex items-center justify-center"
                  src="/Images/Maxence.png"
                  width={200}
                  height={100}
                  alt="Maxence Dupre"
                />
              </div>
              <div className="font-retrogaming  text-center text-xs  hover:text-white lg:w-full lg:flex lg:flex-col lg:text-center lg:justify- lg:text-lg dark:text-white  lg:mr-8">
                <p>
                  Age :
                  <br />
                  21ans
                </p>
                <p className="py-4">
                  Télephone :
                  <br />
                  06.03.92.29.48
                </p>
                <p className="mb-4">
                  Email :
                  <br />
                  Maxencedpr@icloud.com
                </p>
              </div>
            </div>
          </Card>

          <div>
            <Card className="dark:text-white  dark:bg-blue-400/70  dark:border-white p-4 my-2 mx-4 ">
              <p className="xl:text-2xl font-retrogaming text-xs py-4 lg:py-8 lg:px-8 lg:text-lg  hover:text-white">
                Je suis un développeur web Front-end /back-end ainsi que web
                mobile .
                <br />
                <br />
                j &apos; ai travaillé dans plusieurs domaines différents de ce
                qui concerne le monde d &apos; internet mais j &apos; ai enfin
                trouvé ce que j &apos; aime réellement.
                <br />
                <br />
                Mes hobies sont les jeux vidéos comme ( League of legends ,
                Valorant , Fifa etc ...) et d &apos; animé en géneral !
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};
export default Introduction;
