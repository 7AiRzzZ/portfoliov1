import Button from "@/app/components/tools/button";
import Image from "next/image";
import Card from "@/app/components/tools/card";

const Introduction = () => {
  return (
    <section>
      <div className="flex flex-col text-center mt-28 mx-4 dark:text-red-500">
        <Card>
          <div className="flex flex-col text-center uppercase text-xl">
            <h1>Maxence Dupre</h1>
            <h2>Devellopeur Web Front END|REACT</h2>
          </div>
        </Card>
        <div className="">
          <Button text={"A Propos"} />
        </div>
        <Card>
          <Image
            src="/Images/ayanokoji.png"
            width={100}
            height={50}
            alt="Maxence Dupre"
          />
          <div className="pl-4">
            <p>Age : 21ans</p>
            <br />
            <p>Télephone : 06.03.92.29.48</p>
            <br />
            <p>Email : Maxencedpr@icloud.com</p>
          </div>
        </Card>
        <Card>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            officia porro optio tempora vero quibusdam cumque ratione possimus
            laborum nemo eum, adipisci fugiat amet beatae eius facilis vel.
            Eligendi, voluptatum.
          </p>
        </Card>
      </div>
    </section>
  );
};
export default Introduction;
