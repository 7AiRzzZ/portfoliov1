import "./styles.css";
import PropTypes from "prop-types";

const Button = ({ type, onClick, text }) => {
  return (
    <>
      <div class="container">
        <a href="#" class="button">
          <div class="button__line"></div>
          <div class="button__line"></div>
          <button type={type} onClick={onClick} class="button__text">{text}</button>
          <div class="button__drow1"></div>
          <div class="button__drow2"></div>
        </a>
      </div>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
};
export default Button;
