import Button from "@/app/components/tools/button";
import Image from "next/image";
import Card from "@/app/components/tools/card";

const Introduction = () => {
  return (
    <section className="">
      <div className="flex flex-col text-center mt-24 mx-4 dark:text-red-500 lg:flex lg:justify-center lg:items-center">
        <Card>
          <div className="flex flex-col text-center justify-center text-xl lg:h-52 lg:justify-center lg:items-center lg:py-16 lg:px-32">
            <h1 className="lg:uppercase lg:text-bold lg:py-2 pt-2 lg:text-5xl">
              Maxence Dupre
            </h1>
            <p className="lg:py-2 lg:text-3xl">Developpeur Web</p>
            <p className="lg:py-2 pb-2 lg:text-3xl">Front END/Back END</p>
          </div>
        </Card>
        <div className="lg:my-8">
          <Button text={"A Propos"} />
        </div>
        <div className=" lg:w-8/12  ">
          <Card className="lg:py-8 my-1">
            <div className=" flex flex-row justify-center items-center">
              <div className=" mx-2 lg:w-full lg:flex lg:flex-row lg:items-center lg:justify-center">
                <div className="lg:hidden">
                  <picture>
                    {" "}
                    <source media="(min-width:320px)" srcset="" />
                    <Image
                      src="/Images/ayanokoji.png"
                      width={70}
                      height={70}
                      alt="Maxence Dupre"
                    />
                  </picture>
                </div>
                <div className="hidden">
                  <picture>
                    {" "}
                    <source media="(min-width:768px)" srcset="" />
                    <Image
                      src="/Images/ayanokoji.png"
                      width={200}
                      height={200}
                      alt="Maxence Dupre"
                    />
                  </picture>
                </div>
              </div>
              <div className="  text-center text-xs lg:w-full lg:flex lg:flex-col lg:text-center lg:justify-start lg:text-2xl dark:text-white ">
                <p>Age : 21ans</p>
                <br />
                <p>Télephone : 06.03.92.29.48</p>
                <br />
                <p>Email : Maxencedpr@icloud.com</p>
              </div>
            </div>
          </Card>
        </div>
        <Card className=" lg:my-8 my-1">
          <p className="lg:text-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            officia porro optio tempora vero quibusdam cumque ratione possimus
            laborum nemo eum, adipisci fugiat amet beatae eius facilis vel.
            Eligendi, voluptatum.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nesciunt officia porro optio tempora vero
            quibusdamLorem ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt officia porro optio tempora vero quibusdam
          </p>
        </Card>
      </div>
    </section>
  );
};
export default Introduction;
