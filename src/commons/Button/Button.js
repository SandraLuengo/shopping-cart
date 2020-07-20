import React from "react";

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

export default Button;
