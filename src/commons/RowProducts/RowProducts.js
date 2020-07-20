import React from "react";
import { ShoppingImg, AddProduct } from "../../commons";

const RowProducts = ({
  className,
  product,
  handleChangeQuantity,
  handleIncrementQuantity,
  handleDecrementQuantity,
}) => {
  return (
    <li className={`${className} productList`}>
      <div className="productList__row productList__row__detail">
        <ShoppingImg
          image={product.image}
          code={product.code}
          name={product.name}
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
        {product.price} {product.currency}
      </div>
      <div className="productList__row productList__row__total">
        {product.quantity * product.price} {product.currency}
      </div>
    </li>
  );
};

export default RowProducts;
