import Button from "@/app/components/tools/button";
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
              <div key={parcours.id} className="flex flex-row lg:flex lg:flex-row  lg:justify-center lg:items-center ">
                <Card className=" containproject lg:flex lg:flex-row lg:justify-center lg:items-center lg:py-4 lg:px-4">
                  <div className="p-4 flex justify-center items-center">
                    <Image src={parcours.image} width={100} height={100} />
                  </div>
                  <div className=" font-retrogaming flex justify-center items-center lg:text-xl">
                    <p>{parcours.description}</p>
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
