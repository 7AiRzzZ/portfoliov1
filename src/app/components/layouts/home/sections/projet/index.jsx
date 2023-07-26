import Btn from "@/app/components/tools/button";
import Image from "next/image";

const Projet = () => {
  return (
    <>
      <div className=" flex flex-col justify-center align-top  ">
        <Btn text={"Projets"} />
      </div>
      <div className="flex justify-center text-lg uppercase mb-1">
        <h1>Individuel:</h1>
      </div>
      <div className="grid grid-cols ">
        <div className=" mx-4  backdrop-blur-sm bg-green-400/30  flex flex-row text-xs text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg">
          <Image
            src="/Images/ayanokoji.png"
            width={50}
            height={25}
            alt="Maxence Dupre"
          />
          <div className="pl-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              optio aperiam facere? Dolorum natus eveniet nulla commodi atque
              cum. Non architecto porro ullam deserunt, asperiores illum
              temporibus impedit sint cum.
            </p>
          </div>
        </div>
        <div className=" mx-4 mt-4  backdrop-blur-sm bg-green-400/30  flex flex-row text-xs items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg">
          <Image
            src="/Images/ayanokoji.png"
            width={50}
            height={25}
            alt="Maxence Dupre"
          />
          <div className="px-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              optio aperiam facere? Dolorum natus eveniet nulla commodi atque
              cum. Non architecto porro ullam deserunt, asperiores illum
              temporibus impedit sint cum.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-lg uppercase my-1">
        <h1>Collaboration:</h1>
      </div>
      <div className="grid grid-cols ">
        <div className=" mx-4  backdrop-blur-sm bg-green-400/30  flex flex-row text-xs text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg">
          <Image
            src="/Images/ayanokoji.png"
            width={50}
            height={25}
            alt="Maxence Dupre"
          />
          <div className="pl-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              optio aperiam facere? Dolorum natus eveniet nulla commodi atque
              cum. Non architecto porro ullam deserunt, asperiores illum
              temporibus impedit sint cum.
            </p>
          </div>
        </div>
        <div className=" mx-4 mt-4  backdrop-blur-sm bg-green-400/30  flex flex-row text-xs items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg">
          <Image
            src="/Images/ayanokoji.png"
            width={50}
            height={25}
            alt="Maxence Dupre"
          />
          <div className="px-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              optio aperiam facere? Dolorum natus eveniet nulla commodi atque
              cum. Non architecto porro ullam deserunt, asperiores illum
              temporibus impedit sint cum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projet;
