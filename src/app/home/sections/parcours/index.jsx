import Button from "@/app/components/tools/button";
import Card from "@/app/components/tools/card";
import Image from "next/image";

const Parcours = () => {
  return (
    <section>
      <div className=" flex flex-col justify-center align-top  ">
        <Button text={"Parcours"} />
      </div>
      <div className="text-xs grid grid-cols-[1fr_2fr] text-center">
        <div className="flex items-center justify-center">
          <Image
            className="my-2"
            src="/Images/Imaginationtattoo.png"
            width={100}
            height={50}
            alt="Maxence Dupre"
          />
        </div>
        <div className="w-full">
          <Card className="my-2  mr-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, libero iusto, a dicta magni assumenda enim magnam
              molestiae .
            </p>
          </Card>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="my-2"
            src="/Images/Imaginationtattoo.png"
            width={100}
            height={50}
            alt="Maxence Dupre"
          />
        </div>
        <div className="w-full">
          <Card className="my-2  mr-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, libero iusto, a dicta magni assumenda enim magnam
              molestiae .
            </p>
          </Card>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="my-2"
            src="/Images/Imaginationtattoo.png"
            width={100}
            height={50}
            alt="Maxence Dupre"
          />
        </div>
        <div className="w-full">
          <Card className="my-2  mr-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, libero iusto, a dicta magni assumenda enim magnam
              molestiae .
            </p>
          </Card>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="my-2"
            src="/Images/Imaginationtattoo.png"
            width={100}
            height={50}
            alt="Maxence Dupre"
          />
        </div>
        <div className="w-full">
          <Card className="my-2 mr-2 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, libero iusto, a dicta magni assumenda enim magnam
              molestiae .
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default Parcours;
