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
      <div className="mb-4 mx-12 containproject border-[3px] border-black dark:bg-blue-800/60 dark:border-t-white dark:border-b-white dark:border-r-transparent dark:border-l-transparent shadow-lg lg:mx-80">
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
                className=" dark:text-white font-retrogaming flex flex-col items-center justify-center mx-4 lg:flex-row"
              >
                <ProjetCard className=" dark:border-white dark:containblack contain w-full h-96 flex flex-col items-center justify-center mx-4 pt-8 lg:flex lg:flex-col lg:justify-center lg:items-center lg:py-8 lg:px-8 lg:mx-8">
                  <div>
                    <Image
                      src={project.image}
                      width={150}
                      height={150}
                      alt=""
                    />
                  </div>

                  <p className={`font-semibold pt-8 px-1 lg:text-xl  lg:text-center ${project.className}`}>
                    {project.description}
                  </p>
                  <p className={` py-1 px-1 lg:text-xl text-center lg:text-center`}>
                    {project.description2}
                  </p>
                </ProjetCard>
              </div>
            );
          })}
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------------*/}
      {/* -------------------------------------------------------------------------------------------------------*/}
      <div className="my-4 mx-12 containproject  border-[3px] border-black dark:bg-blue-800/60 dark:border-t-white dark:border-b-white dark:border-r-transparent dark:border-l-transparent lg:mt-12 lg:mx-80 ">
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
                className="dark:text-white font-retrogaming flex flex-col items-center justify-center mx-4 lg:flex-row"
              >
                <ProjetCard className="contain flex flex-col w-full h-96 items-center justify-center pt-8 lg:flex lg:flex-col lg:justify-center lg:items-center lg:py-8 lg:px-8 lg:mx-8">
                  <div className=" h-36">
                    <Image
                      src={project.image}
                      width={150}
                      height={150}
                      alt=""
                    />
                  </div>
                  <p className={` font-semibold pt-8 px-1 lg:text-xl lg:text-center${project.className}`}>
                    {project.description}
                  </p>
                  <p className={` py-1 px-1 lg:text-xl text-center lg:text-center `}>
                    {project.description2}
                  </p>
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
