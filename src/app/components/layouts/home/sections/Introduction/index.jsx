import Btn from "@/app/components/tools/button";
import Image from "next/image";

const Introduction = () => {
  return (
    <>
      <div className="  grid grid-cols-1 text-center my-4 mx-4 pb-4 ">
        <div className="backdrop-blur-sm bg-green-400/30 text-s px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg ">
          <h1>Maxence Dupre</h1>
          <h2>Devellopeur Web Front END|REACT</h2>
        </div>
        <div className="">
          <Btn text={"A Propos"} />
        </div>
        <div className="  backdrop-blur-sm bg-green-400/30 flex flex-row text-xs text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg">
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
        </div>
        <div className=" my-4  backdrop-blur-sm bg-green-400/30 flex flex-row text-xs text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            officia porro optio tempora vero quibusdam cumque ratione possimus
            laborum nemo eum, adipisci fugiat amet beatae eius facilis vel.
            Eligendi, voluptatum.
          </p>
        </div>
      </div>
    </>
  );
};
export default Introduction;
