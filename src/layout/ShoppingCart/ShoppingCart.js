import React from "react";
import PropTypes from "prop-types";
import { RowProducts } from "../../commons";

const ShoppingCart = ({
  className,
  categories,
  currency,
  shoppingTexts,
  shoppingCart,
  setCartAction,
  openProductModal,
}) => {
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
  const handleModal = (code) => {
    openProductModal(code);
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
    setCartAction(updatedCart);
  };

  return (
    <div className={className}>
      <h2 className="title">{shoppingTexts.title}</h2>
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
            shoppingTexts={shoppingTexts}
            handleChangeQuantity={handleChangeQuantity}
            handleIncrementQuantity={handleIncrementQuantity}
            handleDecrementQuantity={handleDecrementQuantity}
            handleModal={handleModal}
            currency={currency}
          />
        ))}
      </ul>
    </div>
  );
};

ShoppingCart.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.array,
  currency: PropTypes.string,
  shoppingTexts: PropTypes.object,
  shoppingCart: PropTypes.array,
  setCartAction: PropTypes.func,
  openProductModal: PropTypes.func,
};


export default ShoppingCart;
