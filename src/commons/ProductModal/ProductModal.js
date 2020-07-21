import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../commons";

const ProductModal = ({
  className,
  actualProduct,
  setToggleModal,
  shoppingTexts,
  currency,
}) => {
  const { image, name, price, code, description } = actualProduct;
  const { productCode } = shoppingTexts;
  const fileUrl = require(`../../static/images/modal/${image}.jpg`);
  const closeModal = () => {
    setToggleModal(false);
  };

  return (
    <div className={`${className} productModal`}>
      <div className="productModal__img">
        <img src={fileUrl} alt={`${actualProduct?.name}-modal`} />
      </div>
      <div className="productModal__description">
        <Button handleFunction={closeModal} type="closeModal" content="X" />
        <div className="productModal__description__product">
          <span className="productModal__description__product__name">
            {name}
          </span>
          <span className="productModal__description__product__price">
            {price}
            {currency}
          </span>
        </div>
        <div className="productModal__description__description">
          {description}
        </div>
        <div className="productModal__description__code">
          {productCode} {code}
        </div>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  className: PropTypes.string,
  actualProduct: PropTypes.object,
  setToggleModal: PropTypes.func,
  shoppingTexts: PropTypes.object,
  currency: PropTypes.string,
};

export default ProductModal;
