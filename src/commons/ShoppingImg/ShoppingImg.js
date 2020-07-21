import React from "react";
import PropTypes from "prop-types";

const ShoppingImg = ({ className, image, productCode, name, code }) => {
  const fileUrl = require(`../../static/images/${image}.png`);
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

ShoppingImg.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  productCode: PropTypes.string,
  name: PropTypes.string,
  code: PropTypes.string,
};

export default ShoppingImg;
