import React from "react";
import { ShoppingImg, AddProduct } from "../../commons";

const RowProducts = ({
  className,
  product,
  handleChangeQuantity,
  handleIncrementQuantity,
  handleDecrementQuantity,
  currency,
  shoppingTexts,
}) => {
  return (
    <li className={`${className} productList`}>
      <div className="productList__row productList__row__detail">
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

export default RowProducts;
