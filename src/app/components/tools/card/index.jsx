import PropTypes from "prop-types";

const Card = ({ className, children }) => {
  return (
    <div
      className={` backdrop-blur-sm bg-green-400/30  py-2 px-2 border-t-8 border-t-green-700 border-l-8 border-l-green-700 border-r-8 border-r-white border-b-8 border-b-white rounded-sm shadow-lg ${className}`}
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
