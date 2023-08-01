import "./styles.css";
import PropTypes from "prop-types";

const annimationTitle = ({ text }) => {
  return (
    <>
      <div class="box">
        <h2 class="title1">
          <div class="bar"></div>
          <div class="text">
            <span>{text}</span>
          </div>
        </h2>
      </div>
    </>
  );
};

// Title.PropTypes = {
//   text: PropTypes.string,
// };

export default annimationTitle;
