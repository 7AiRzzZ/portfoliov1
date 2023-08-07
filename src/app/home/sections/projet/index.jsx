import Button from "@/app/components/tools/button";
import Image from "next/image";
import ProjetCard from "@/app/components/tools/projetCard/projetCard";
import Titre from "@/app/components/tools/titre";

const Projet = () => {
  return (
    <>
      <div className=" lg:mt-16 lg:mx-4 lg:my-4 lg:flex lg:justify-start lg:items-start">
        <Titre className={"px-4"}>
          <h1 className="uppercase py-1 lg:text-4xl">Projets</h1>
        </Titre>
      </div>
      {/* ---------------------------------Card flip----------------------------- */}
      <div className=" bg-green-400/30 border-t-4 border-b-4 border-t-green-700 border-b-white shadow-lg">
        <h1 className=" uppercase text-center lg:text-4xl">Individuel</h1>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:my-16">
        <ProjetCard className="grid grid-cols-2 text-white mx-4 lg:mx-16  lg:py-16">
          <div className="pr-1 flex justify-center items-center">
            <div className="lg:hidden">
              <Image
                src="/Images/ayanokoji.png"
                width={150}
                height={150}
                alt="Maxence Dupre"
              />
            </div>
            <picture>
              {" "}
              <source media="" srcset="" />
              <Image
                className="max-lg:hidden"
                src="/Images/ayanokoji.png"
                width={200}
                height={200}
                alt="Maxence Dupre"
              />
            </picture>
          </div>
          <div className=" pl-1 flex items-center text-xs lg:text-2xl">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              molestiae, quos iure consequatur magni expedita, eum exercit alias
              beatae voluptatum dolor.
            </p>
          </div>
        </ProjetCard>
        <ProjetCard className="grid grid-cols-2 text-white mx-4 lg:mx-16  lg:py-16">
          <div className="pr-1 flex justify-center items-center">
            <div className="lg:hidden">
              <Image
                src="/Images/ayanokoji.png"
                width={150}
                height={150}
                alt="Maxence Dupre"
              />
            </div>
            <picture>
              {" "}
              <source media="(min-width:1024px)" srcset="" />
              <Image
                className="max-lg:hidden"
                src="/Images/ayanokoji.png"
                width={200}
                height={200}
                alt="Maxence Dupre"
              />
            </picture>
          </div>
          <div className=" pl-1 flex items-center text-xs lg:text-2xl">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              molestiae, quos iure consequatur magni expedita, eum exercit alias
              beatae voluptatum dolor.
            </p>
          </div>
        </ProjetCard>
      </div>
      {/* -------------------------------------------------------------------------------------------------------*/}
      <div className=" bg-green-400/30 border-t-4 border-b-4 border-t-green-700 border-b-white shadow-lg">
        <h1 className=" uppercase text-center lg:text-4xl">Collaboration</h1>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:my-16">
        <ProjetCard className="grid grid-cols-2 text-white mx-4 lg:mx-16  lg:py-16">
          <div className="pr-1 flex justify-center items-center">
            <div className="lg:hidden">
              <Image
                src="/Images/ayanokoji.png"
                width={150}
                height={150}
                alt="Maxence Dupre"
              />
            </div>
            <picture>
              {" "}
              <source media="(min-width:1024px)" srcset="" />
              <Image
                className="max-lg:hidden"
                src="/Images/ayanokoji.png"
                width={200}
                height={200}
                alt="Maxence Dupre"
              />
            </picture>
          </div>
          <div className=" pl-1 flex items-center text-xs lg:text-2xl">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              molestiae, quos iure consequatur magni expedita, eum exercit alias
              beatae voluptatum dolor.
            </p>
          </div>
        </ProjetCard>
        <ProjetCard className="grid grid-cols-2 text-white mx-4 lg:mx-16  lg:py-16">
          <div className="pr-1 flex justify-center items-center">
            <div className="lg:hidden">
              <Image
                src="/Images/ayanokoji.png"
                width={150}
                height={150}
                alt="Maxence Dupre"
              />
            </div>
            <picture>
              {" "}
              <source media="(min-width:1024px)" srcset="" />
              <Image
                className="max-lg:hidden"
                src="/Images/ayanokoji.png"
                width={200}
                height={200}
                alt="Maxence Dupre"
              />
            </picture>
          </div>
          <div className=" pl-1 flex items-center text-xs lg:text-2xl">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              molestiae, quos iure consequatur magni expedita, eum exercit alias
              beatae voluptatum dolor.
            </p>
          </div>
        </ProjetCard>
      </div>
    </>
  );
};
export default Projet;
