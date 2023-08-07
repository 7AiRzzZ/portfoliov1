import Button from "@/app/components/tools/button";
import Image from "next/image";
import Card from "@/app/components/tools/card";
import Titre from "../../../components/tools/titre";

const Introduction = () => {
  return (
    <section className="">
      <div className="flex flex-col text-center mt-24 lg:mb-8 dark:text-white lg:flex lg:justify-center lg:items-center">
        <Card className="mx-4">
          <div className="flex flex-col text-center justify-center text-xl lg:h-52 lg:justify-center lg:items-center lg:py-16 lg:px-32">
            <h1 className="lg:uppercase lg:text-bold lg:py-2 pt-2 lg:text-5xl">
              Maxence Dupre
            </h1>
            <p className="lg:py-2 lg:text-3xl">Développeur web</p>
            <p className="lg:py-2 pb-2 lg:text-3xl">Front END/Back END</p>
          </div>
        </Card>
      </div>
      {/* ------------------------------------- */}
      <div className="w-full  lg:text-center lg:mt-16 lg:mx-4 lg:my-4 lg:flex lg:justify-start lg:items-start">
        <Titre className={"px-4"}>
          <h1 className="uppercase py-1 lg:text-4xl">à propos</h1>
        </Titre>
      </div>
      {/* --------------------------------------- */}
      <div className=" lg:flex lg:flex:row lg:justify-center lg:items-center  ">
        <Card className="lg:py-8 lg:px-8 my-4 mx-4 ">
          <div className="px-8">
          <div className=" flex flex-row justify-center items-center lg:grid lg:grid-cols-2">
            <div >
              <picture className="lg:hidden">
                {" "}
                <source media="(min-width:320px)and(max-witdh:768px)" srcset="" />
                <Image
                  src="/Images/ayanokoji.png"
                  width={70}
                  height={70}
                  alt="Maxence Dupre"
                  className="max-lg:hidden"
                />
              </picture>
              
              <picture>
                {" "}
                <source media="(min-width:1024px)and(max-witdh:1440px)" srcset="" />
                <Image
                  src="/Images/ayanokoji.png"
                  width={200}
                  height={200}
                  alt="Maxence Dupre"

                />
              </picture>
            </div>
            <div className="text-center text-xs lg:w-full lg:flex lg:flex-col lg:text-center lg:justify-start lg:text-2xl dark:text-white ">
              <p>Age : 21ans</p>
              <br />
              <p>Télephone : 06.03.92.29.48</p>
              <br />
              <p>Email : Maxencedpr@icloud.com</p>
            </div>
          </div>
          </div>
        </Card>
      </div>
      {/* ----------------------- -------------------------------------------------------------------------------*/}
      <Card className=" my-2 mx-4 lg:my-8 lg:mx-8 lg:text-center">
        <p className="lg:text-2xl text-xs ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          officia porro optio tempora vero quibusdam cumque ratione possimus
          laborum nemo eum, adipisci fugiat amet beatae eius facilis vel.
          Eligendi, voluptatum.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nesciunt officia porro optio tempora vero
          quibusdamLorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </Card>
    </section>
  );
};
export default Introduction;
