import Btn from "@/app/components/tools/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faCode,
  faBook,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../../navbar/styles";

const Parcours = () => {
  return (
    <>
      <div className=" flex flex-col justify-center align-top  ">
        <Btn text={"Parcours"} />
      </div>
      <div className="">
        <div className=" flex flex-row items-center">
          <FontAwesomeIcon
            className=" ml-2 backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2  shadow-lgfa-2xl"
            icon={faBook}
            style={{ color: "#000000" }}
          />
          <div className="mx-2 text-xs backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2 border-t-4 border-t-green-700 border-l-4 border-l-green-700 border-r-44 border-b-white rounded-sm shadow-lgfa-2xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              fugiat totam quas sed optio. 
            </p>
          </div>
        </div>
        <div className=" flex flex-row items-center  mt-2">
          <FontAwesomeIcon
            className=" ml-2 backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lgfa-2xl"
            icon={faBook}
            style={{ color: "#000000" }}
          />
          <div className="mx-2  text-xs backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lgfa-2xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              fugiat totam quas sed optio. 
            </p>
          </div>
        </div>
        <div className=" flex flex-row items-center  mt-2">
          <FontAwesomeIcon
            className=" ml-2 backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lgfa-2xl"
            icon={faBook}
            style={{ color: "#000000" }}
          />
          <div className="mx-2 text-xs backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lgfa-2xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              fugiat totam quas sed optio. 
            </p>
          </div>
        </div>
        <div className=" flex flex-row items-center mt-2">
          <FontAwesomeIcon
            className=" ml-2 backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lgfa-2xl"
            icon={faBook}
            style={{ color: "#000000" }}
          />
          <div className="mx-2 text-xs backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lgfa-2xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              fugiat totam quas sed optio. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Parcours;
