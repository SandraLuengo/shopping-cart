import React from "react";

const ShoppingImg = ({ className, image, name, code }) => {
  const fileUrl = require(`../../static/images/${image}`);
  return (
    <div className={className}>
      <img alt="img" src={`${fileUrl}`} />
      <div>
        <div>{name}</div>
        <div>{code}</div>
      </div>
    </div>
  );
};

export default ShoppingImg;
