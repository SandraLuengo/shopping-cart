import React, { useEffect } from "react";
import Checkout from "./Checkout";

const OrderSummary = ({ className, shoppingCart }) => {
  const getTotalProducts = () => {
    return shoppingCart.reduce((acc, product) => acc + product.quantity, 0);
  };

  let pricingRules = (products) => {
    
  };

  let objCheckout = new Checkout(pricingRules);

  shoppingCart.map((product) => {
    let quantity = product.quantity;
    while (quantity > 0) {
      objCheckout.scan(product.code);
      quantity--;
    }
  });

  objCheckout.total();

  return (
    <aside className={className}>
      <h2 className="title">Order summary</h2>
      <div className="totalItems">
        <div>{getTotalProducts()} Items</div>
        <div>120 €</div>
      </div>
    </aside>
  );
};

export default OrderSummary;
