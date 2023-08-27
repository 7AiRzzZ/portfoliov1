import Image from "next/image";
import ProjetCard from "@/app/components/tools/projetCard/projetCard";
import Titre from "@/app/components/tools/titre";
import projectSolo from "./solo.json";
import projectCollab from "./collab.json";

const Projet = () => {
  return (
    <section id="projects">
      <div className=" lg:mt-16 lg:mx-4 lg:my-4 lg:flex lg:justify-start lg:items-start">
        <Titre className={"dark:text-white px-4"}>
          <h1 className="uppercase py-1 lg:text-4xl">Projets</h1>
        </Titre>
      </div>
      <div className="mb-4 mx-12 containproject border-[3px] border-black shadow-lg lg:mx-80">
        <h1 className="font-pixeloid uppercase text-center py-2 lg:text-4xl dark:text-white">
          En autonomie
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="lg:mt-4 lg:mx-20 lg:grid grid-cols-2">
          {projectSolo.map((project) => {
            return (
              <div
                key={project.id}
                className=" dark:text-white font-retrogaming flex flex-col items-center justify-center lg:flex-row"
              >
                <ProjetCard className="contain flex flex-col items-center justify-center pt-8 lg:flex lg:flex-col lg:justify-center lg:items-center lg:py-8 lg:px-8 lg:mx-8">
                  <Image
                    src={project.image}
                    width={150}
                    height={150}
                    alt="Maxence Dupre"
                  />
                  
                    <p className=" py-8 px-1 lg:text-xl">{project.description}</p>
                  
                </ProjetCard>
              </div>
            );
          })}
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------------*/}
      <div className="my-4 mx-12 containproject  border-[3px] border-black lg:mt-12 lg:mx-80">
        <h1 className="font-pixeloid uppercase text-center py-2 lg:text-4xl dark:text-white">
          En collaboration
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="lg:mt-4 lg:mx-20 lg:grid grid-cols-2">
          {projectCollab.map((project) => {
            return (
              <div
                key={project.id}
                className="dark:text-white font-retrogaming flex flex-col items-center justify-center lg:flex-row"
              >
                <ProjetCard className="contain flex flex-col items-center justify-center pt-8 lg:flex lg:flex-col lg:justify-center lg:items-center lg:py-8 lg:px-8 lg:mx-8">
                  <Image
                    src={project.image}
                    width={150}
                    height={150}
                    alt="Maxence Dupre"
                  />
                  <p className=" py-8 px-1 lg:text-xl">{project.description}</p>
                </ProjetCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Projet;
