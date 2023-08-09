import Card from "@/app/components/tools/card";
import Image from "next/image";
import Titre from "@/app/components/tools/titre";
import data from "./data.json";

export const Competences = () => {
  return (
    <section id="skills">
      <div className=" lg:mt-16 lg:mx-4 lg:my-4 lg:flex lg:justify-start lg:items-start">
        <Titre className={"dark:text-white px-4"}>
          <h1 className="uppercase py-1 lg:text-4xl">Compétences</h1>
        </Titre>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {data.map((skill) => {
          return (
            <div key={skill.id} className="p-2 lg:mx-8">
              <Card className="flex items-center justify-center p-4 lg:py-8">
                <Image
                  src={skill.image}
                  width={100}
                  height={50}
                  alt="Maxence Dupre"
                />
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Competences;
