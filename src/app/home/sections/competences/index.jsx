"use client";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Button from "@/app/components/tools/button";
import Card from "@/app/components/tools/card";

export const Competences = () => {
  return (
    <section>
      <div>
        <Button text={"Compétences"} />
      </div>
      <Carousel showArrows={true} className={styles}>
        <Card>
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
        </Card>
        <Card>
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
        </Card>
        <Card>
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
        </Card>
        <Card>
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
        </Card>
        <Card>
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
        </Card>
      </Carousel>
    </section>
  );
};
export default Competences;
