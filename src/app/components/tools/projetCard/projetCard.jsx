import PropTypes from "prop-types";

const ProjetCard = ({ className, children }) => {
  return (
    <div
      className={` mx-2 my-2 backdrop-blur-sm bg-gray-500/70 border-x-4 border-black border-y-4 py-2 px-2 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

ProjetCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ProjetCard;
