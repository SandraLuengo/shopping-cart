import React from "react";
import PropTypes from "prop-types";
import { ShoppingImg, AddProduct } from "../../commons";

const RowProducts = ({
  className,
  product,
  handleChangeQuantity,
  handleIncrementQuantity,
  handleDecrementQuantity,
  handleModal,
  currency,
  shoppingTexts,
}) => {
  return (
    <li className={`${className} productList`}>
      <div
        className="productList__row productList__row__detail"
        onClick={() => handleModal(product.code)}
      >
        <ShoppingImg
          image={product.image}
          code={product.code}
          name={product.name}
          productCode={shoppingTexts.productCode}
        />
      </div>
      <div className="productList__row productList__row__quantity">
        <AddProduct
          code={product.code}
          quantity={product.quantity}
          handleChangeQuantity={handleChangeQuantity}
          handleIncrementQuantity={handleIncrementQuantity}
          handleDecrementQuantity={handleDecrementQuantity}
        />
      </div>
      <div className="productList__row productList__row__price">
        {product.price} {currency}
      </div>
      <div className="productList__row productList__row__total">
        {product.quantity * product.price} {currency}
      </div>
    </li>
  );
};

RowProducts.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
  handleChangeQuantity: PropTypes.func,
  handleIncrementQuantity: PropTypes.func,
  handleDecrementQuantity: PropTypes.func,
  handleModal: PropTypes.func,
  currency: PropTypes.string,
  shoppingTexts: PropTypes.object,
};

export default RowProducts;
