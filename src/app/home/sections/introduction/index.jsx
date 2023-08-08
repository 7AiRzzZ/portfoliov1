import Image from "next/image";
import Card from "@/app/components/tools/card";
import Titre from "@/app/components/tools/titre";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center dark:text-white">
        <div className="flex flex-col text-center justify-center text-xl lg:h-52 lg:justify-center lg:items-center lg:py-16 lg:px-32">
          <h1 className="font-pixeloid pt-20 lg:uppercase lg:text-bold lg:py-2 lg:text-5xl">
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
          <div className="flex flex-col pt-6 pb-20 lg:flex-row lg:pt-8 lg:pt-20">
            <button className="pb-2 lg:pb-0 lg:mr-4">Mon Cv</button>
            <button className="pt-2 lg:pt-0 lg:ml-4">Mes projets</button>
          </div>
        </div>
      </div>
      <section className="" id="about">
        <div className="w-full lg:text-center lg:mt-16 lg:mx-4 lg:my-4 lg:flex lg:justify-start lg:items-start">
          <Titre className={"dark:text-white px-4"}>
            <h1 className="uppercase py-1 lg:text-4xl">à propos</h1>
          </Titre>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2" data-aos={"fade-right"}>
          <Card className="lg:py-8 lg:px-8 my-4 mx-4 py-2">
            <div className="px-8">
              <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
                <div className="py-8">
                  <Image
                    className="rounded-full"
                    src="/Images/ayanokoji.png"
                    width={200}
                    height={200}
                    alt="Maxence Dupre"
                  />
                </div>
                <div className="font-retrogaming pb-8 text-center text-xs lg:w-full lg:flex lg:flex-col lg:text-center lg:justify-start lg:text-2xl dark:text-white ">
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
                  <p>
                    Email :
                    <br />
                    Maxencedpr@icloud.com
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <div>
            <Card className="dark:text-white p-4 my-2 mx-4 lg:my-8 lg:mx-8">
              <p className="lg:text-2xl font-retrogaming text-xs py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt officia porro optio tempora vero quibusdam cumque
                ratione possimus laborum nemo eum, adipisci fugiat amet beatae
                eius facilis vel. Eligendi, voluptatum.Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nesciunt officia porro optio
                tempora vero quibusdamLorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};
export default Introduction;
