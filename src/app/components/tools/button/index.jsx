
import PropTypes from "prop-types";

const Button = ({ type, onClick, text }) => {
  return (
    <>
      <div class="bg-white/30 border-2 p-1 border-black mt-6 my-2 mx-64 items-center justify-center text-center flex active:bg-blue-700/30">
        <a href="#" class="button">
          <button type={type} onClick={onClick} class=" w-full">
            {text}
          </button>
        </a>
      </div>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
export default Button;
