import React from "react";
import { categories } from "../../language/en_US";
import { RowProducts } from "../../commons";

const ShoppingCart = ({ className, shoppingCart, setCartAction }) => {
  const handleChangeQuantity = (e) => {
    let code = e.target.name;
    let value = e.target.value || 0;

    updateProductsQuantity(code, parseInt(value));
  };

  const handleIncrementQuantity = (e) => {
    let code = e.target.name;
    const [{ quantity }] = getActualQuantity(code);
    updateProductsQuantity(code, quantity + 1);
  };

  const handleDecrementQuantity = (e) => {
    let code = e.target.name;
    const [{ quantity }] = getActualQuantity(code);
    quantity > 0 && updateProductsQuantity(code, quantity - 1);
  };

  const getActualQuantity = (productCode) => {
    return shoppingCart.filter((product) => product.code === productCode);
  };
  const updateProductsQuantity = (productCode, newQuantity) => {
    let updatedCart = shoppingCart.map((product) =>
      product.code === productCode
        ? { ...product, quantity: newQuantity }
        : { ...product }
    );
    console.log(updatedCart);
    setCartAction(updatedCart);
  };

  return (
    <div className={className}>
      <h2 className="title">Shopping cart</h2>
      <ul className="product">
        {categories.map((category, i) => (
          <li
            key={`category-${i}`}
            className={`product__row product__row__${category.class}`}
          >
            {category.name}
          </li>
        ))}
      </ul>
      <ul className="product productList">
        {shoppingCart.map((product, i) => (
          <RowProducts
            product={product}
            key={`product-${i}`}
            handleChangeQuantity={handleChangeQuantity}
            handleIncrementQuantity={handleIncrementQuantity}
            handleDecrementQuantity={handleDecrementQuantity}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
