import PropTypes from "prop-types";

const Card = ({ className, children, dataAos }) => {
  return (
    <div
      className={`hover:transition hover:ease-out hover:duration-200 hover:scale-105 hover:text-white my-4 mx-2 contain border-4 border-black  ${className}`}
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
