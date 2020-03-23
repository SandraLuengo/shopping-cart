import React from "react";
import { categories, products } from "../../language/en_US";
import { ShoppingImg } from "../../commons";

const ShoppingCart = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="title">Shopping cart</h2>
      <ul className="product">
        <li className="product__row">
          {categories.map((category, i) => (
            <div
              key={`category-${i}`}
              className={`product__row__${category.class}`}
            >
              {category.name}
            </div>
          ))}
        </li>
      </ul>
      <ul className="product productList">
        {products.map((product, i) => (
          <li key={`product-${i}`} className="product__row">
            <ShoppingImg
              image={product.image}
              code={product.code}
              name={product.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
