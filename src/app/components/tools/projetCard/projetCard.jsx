import PropTypes from "prop-types";

const ProjetCard = ({ className, children }) => {
  return (
    <div
      className={`hover:transition hover:ease-out hover:duration-200 hover:scale-105 hover:text-white mx-2 my-4 backdrop-blur-sm border-x-4 dark:border-white/90 border-black border-y-4 py-2 px-2 shadow-lg ${className}`}
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
