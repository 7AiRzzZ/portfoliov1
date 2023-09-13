import Card from "@/app/components/tools/card";
import Image from "next/image";
import Titre from "@/app/components/tools/titre";
import parcoursData from "./data.json";

const Parcours = () => {
  return (
    <section id="timeline">
      <div className="lg:mt-16 lg:mx-4 lg:my-4 lg:flex lg:justify-start lg:items-start">
        <Titre className={"dark:text-white px-4"}>
          <h1 className="uppercase py-1 lg:text-4xl">Parcours</h1>
        </Titre>
      </div>
      <div className="dark:text-white text-xs text-center flex flex-col lg:flex lg:flex-col">
        {parcoursData.map((parcours) => {
          return (
            <div
              key={parcours.id}
              className="flex flex-row lg:flex lg:flex-row  lg:justify-center lg:items-center "
            >
              <Card className=" dark:border-white containproject dark:bg-blue-400/70 w-[45rem] text-center lg:flex lg:flex-row lg:justify-center lg:items-center lg:py-4 lg:px-4">
                <div className={`flex flex-col lg:grid lg: grid-cols-2`}>
                  <div className="p-4 flex justify-center items-center lg:flex lg:justify-start lg:items-center lg:text-left">
                    <Image
                      src={parcours.image}
                      width={100}
                      height={100}
                      className={`${parcours.className}`}
                    />
                  </div>
                  <div className=" font-retrogaming flex justify-center  py-4 items-center lg:text-xl  hover:text-white">
                    <p>{parcours.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Parcours;
