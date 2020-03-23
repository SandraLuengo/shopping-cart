import React from "react";
import { ShoppingCart, OrderSummary } from "../../layout";

const ShoppingContainer = ({ className }) => {
  return (
    <div className={className}>
      <ShoppingCart />
      <OrderSummary />
    </div>
  );
};

export default ShoppingContainer;
