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
            className=" ml-2 backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg h-5 w-5 "
            icon={faBook}
            style={{ color: "#000000" }}
          />
          <div className="mx-2 text-xs backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              fugiat totam quas sed optio. 
            </p>
          </div>
        </div>
        <div className=" flex flex-row items-center  mt-2">
          <FontAwesomeIcon
            className="ml-2 backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg h-5 w-10  "
            icon={faBuilding}
            style={{ color: "#000000" }}
          />
          <div className="mx-2  text-xs backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              fugiat totam quas sed optio. 
            </p>
          </div>
        </div>
        <div className=" flex flex-row items-center  mt-2">
          <FontAwesomeIcon
            className="ml-2 backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg h-5 w-5 "
            icon={faCarSide}
            style={{ color: "#000000" }}
          />
          <div className="mx-2 text-xs backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              fugiat totam quas sed optio. 
            </p>
          </div>
        </div>
        <div className=" flex flex-row items-center mt-2">
          <FontAwesomeIcon
            className=" ml-2 backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg h-5 w-5 "
            icon={faCode}
            style={{ color: "#000000" }}
          />
          <div className="mx-2 text-xs backdrop-blur-sm bg-green-400/30  flex flex-row  text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg ">
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
