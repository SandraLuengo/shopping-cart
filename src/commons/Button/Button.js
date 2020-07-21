import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, handleFunction, content, type, code }) => {
  return (
    <button
      name={code}
      className={`${className} ${type}`}
      onClick={handleFunction}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  handleFunction: PropTypes.func,
  content: PropTypes.string,
  type: PropTypes.string,
  code: PropTypes.string,
};

export default Button;
