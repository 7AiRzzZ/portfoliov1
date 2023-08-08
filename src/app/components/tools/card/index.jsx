import PropTypes from "prop-types";

const Card = ({ className, children, dataAos }) => {
  return (
    <div
      className={`hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-green-700my-4 mx-2 contain border-t-[6px] border-t-green-700 border-l-[6px] border-l-green-700 border-r-4 border-r-white border-b-4 border-b-white  ${className}`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
