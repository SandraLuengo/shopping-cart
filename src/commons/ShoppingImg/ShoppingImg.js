import React from "react";

const ShoppingImg = ({ className, image, productCode, name, code }) => {
  console.log(name);
  const fileUrl = require(`../../static/images/${image}`);
  return (
    <div className={className}>
      <img className="productImg" alt="img" src={`${fileUrl}`} />
      <div className="productInfo">
        <div className="productInfo__name">{name}</div>
        <div className="productInfo__code">
          {productCode} {code}
        </div>
      </div>
    </div>
  );
};

export default ShoppingImg;
