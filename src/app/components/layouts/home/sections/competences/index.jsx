"use client";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/app/components/tools/button";

export const Competences = () => {
  return (
    <>
      <div>
        <Btn text={"Compétences"} />
      </div>
      <Carousel showArrows={true} className={styles}>
        <div className="backdrop-blur-sm bg-green-400/30 flex flex-row text-xs text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg">
          <div className="fa-2xl">
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faHtml5}
              style={{ color: "#ff4d00" }}
            />
          </div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            deserunt
          </h3>
        </div>
        <div className="backdrop-blur-sm bg-green-400/30  flex flex-row text-xs text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg">
          <div className="fa-2xl">
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faCss3}
              style={{ color: "#2f47f9" }}
            />
          </div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            deserunt
          </h3>
        </div>
        <div className="backdrop-blur-sm bg-green-400/30  flex flex-row text-xs text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg">
          <div className="fa-2xl">
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faJs}
              style={{ color: "#ffde05" }}
            />
          </div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            deserunt
          </h3>
        </div>
        <div className="backdrop-blur-sm bg-green-400/30  flex flex-row text-xs text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg">
          <div className="fa-2xl">
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faCode}
              style={{ color: "#000000" }}
            />
          </div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            deserunt
          </h3>
        </div>
        <div className="backdrop-blur-sm bg-green-400/30  flex flex-row text-xs text-center items-center py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg">
          <div className="fa-2xl">
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faCode}
              style={{ color: "#000000" }}
            />
          </div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            deserunt
          </h3>
        </div>
      </Carousel>
    </>
  );
};
export default Competences;
