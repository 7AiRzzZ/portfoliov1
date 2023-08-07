import Button from "@/app/components/tools/button";
import Card from "@/app/components/tools/card";
import Image from "next/image";
import Titre from "@/app/components/tools/titre";

const Parcours = () => {
  return (
    <section>
      {/* ------------------*/}
      <div className=" lg:mt-16 lg:mx-4 lg:my-4 lg:flex lg:justify-start lg:items-start">
        <Titre className={"px-4"}>
          <h1 className="uppercase py-1 lg:text-4xl">Parcours</h1>
        </Titre>
      </div>
      {/* ------------------*/}
      <div className="text-xs  text-center flex flex-col lg:flex lg:flex-col">
        <div className="pr-1 flex justify-center items-center lg:my-4">
          <div className="lg:hidden  ">
            <Image
              src="/Images/ayanokoji.png"
              width={100}
              height={50}
              alt="Maxence Dupre"
            />
          </div>
          <picture>
            {" "}
            <source media="(min-width:1024px)" srcset="" />
            <Image
              className="lg:mx-8 lg:my-2 max-lg:hidden"
              src="/Images/ayanokoji.png"
              width={150}
              height={150}
              alt="Maxence Dupre"
            />
          </picture>
          <div className="w-full">
            <Card className="my-2 mr-2 lg:mx-16 lg:py-8">
              <p className=" lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, libero iusto, a dicta magni assumenda enim magnam
                molestiae .
              </p>
            </Card>
          </div>
        </div>
        <div className="pr-1 flex justify-center items-center lg:my-4">
          <div className="lg:hidden">
            <Image
              src="/Images/ayanokoji.png"
              width={100}
              height={50}
              alt="Maxence Dupre"
            />
          </div>
          <picture>
            {" "}
            <source media="(min-width:1024px)" srcset="" />
            <Image
              className="lg:mx-8 lg:my-2 max-lg:hidden"
              src="/Images/ayanokoji.png"
              width={150}
              height={150}
              alt="Maxence Dupre"
            />
          </picture>
          <div className="w-full">
            <Card className="my-2  mr-2  lg:mx-16 lg:py-8">
              <p className=" lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, libero iusto, a dicta magni assumenda enim magnam
                molestiae .
              </p>
            </Card>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="pr-1 flex justify-center items-center lg:my-4">
            <div className="lg:hidden">
              <Image
                src="/Images/ayanokoji.png"
                width={100}
                height={50}
                alt="Maxence Dupre"
              />
            </div>
            <picture>
              {" "}
              <source media="(min-width:1024px)" srcset="" />
              <Image
                className="lg:mx-8 lg:my-2 max-lg:hidden"
                src="/Images/ayanokoji.png"
                width={150}
                height={150}
                alt="Maxence Dupre"
              />
            </picture>
          </div>
          <div className="w-full">
            <Card className="my-2  mr-2  lg:mx-16 lg:py-8">
              <p className=" lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, libero iusto, a dicta magni assumenda enim magnam
                molestiae .
              </p>
            </Card>
          </div>
        </div>
        <div className="pr-1 flex justify-center items-center lg:my-4">
          <div className="lg:hidden">
            <Image
              src="/Images/ayanokoji.png"
              width={100}
              height={50}
              alt="Maxence Dupre"
            />
          </div>
          <picture>
            {" "}
            <source media="(min-width:1024px)" srcset="" />
            <Image
              className="lg:mx-8 lg:my-2 max-lg:hidden"
              src="/Images/ayanokoji.png"
              width={150}
              height={150}
              alt="Maxence Dupre"
            />
          </picture>
          <div className="w-full">
            <Card className="my-2 mr-2  lg:mx-16 lg:py-8">
              <p className=" lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, libero iusto, a dicta magni assumenda enim magnam
                molestiae .
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Parcours;
