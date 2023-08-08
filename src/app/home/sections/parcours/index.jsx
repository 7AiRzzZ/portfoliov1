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
        <div className="flex flex-col items-center lg:my-4">
          {parcoursData.map((parcours) => {
            return (
              <Card>
                <div className="flex flex-row">
                  <div className="p-4">
                    <Image src={parcours.image} width={70} height={70} />
                  </div>
                  <div className="flex justify-center items-center">
                    <p>{parcours.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Parcours;
