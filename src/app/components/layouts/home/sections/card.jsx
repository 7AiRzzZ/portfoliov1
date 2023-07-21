import { headers } from "next/dist/client/components/headers";
import Image from "next/image";



const Card = (props) => {
  return (
    <>
      <div>
        <Image
          src={props.src}
          width={props.width}
          height={props.height}
          alt={props.alt}
        />
      </div>
      <div>
        <span>
        {props.paragraph}
        </span>
      </div>
    </>
  );
};

export default Card;



Image.prototypes = {
  type: PropTypes.string.isRequired,
  src : PropTypes.string,
  width : PropTypes.string
  
};
