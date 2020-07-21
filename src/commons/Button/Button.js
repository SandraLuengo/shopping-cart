import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, handleFunction, content, type, code, dataCy }) => {
  return (
    <button
      name={code}
      data-cy={dataCy}
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
  dataCy: PropTypes.string,
};

export default Button;
