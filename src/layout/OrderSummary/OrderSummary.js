import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Checkout from "./Checkout";
import { Button } from "../../commons";
import {
  getTotalProducts,
  getTotalPrice,
  getProductByCode,
} from "../../utils/productFunctions";

const OrderSummary = ({ className, orderSummary, currency, shoppingCart }) => {
  const [twoPerOne, setTwoPerOne] = useState(0);
  const [bulkDiscount, setBulkDiscount] = useState(0);
  const [total, setTotal] = useState("");

  let pricingRules = (code, quantity) => {
    const price = getProductByCode(shoppingCart, code)?.price;
    let discount = null;
    switch (code) {
      case "X2G2OPZ":
        discount = Math.floor(quantity / 2) * price;
        setTwoPerOne(discount);
        return quantity * price - discount;
      case "X7R2OPX":
        discount = quantity >= 3 ? quantity * price * 0.05 : 0;
        setBulkDiscount(discount);
        return quantity * price - discount;
      case "X3W2OPY":
        return quantity * price;
      default:
        return;
    }
  };

  let objCheckout = new Checkout(pricingRules);

  useEffect(() => {
    shoppingCart.forEach((product) => {
      let quantity = product.quantity;
      while (quantity > 0) {
        objCheckout.scan(product.code);
        quantity--;
      }
    });

    setTotal(objCheckout.total());
  }, [objCheckout, shoppingCart]);

  return (
    <aside className={className}>
      <h2 className="title">{orderSummary.title}</h2>
      <div className="totalItems">
        <div className="totalItems__number">
          {getTotalProducts(shoppingCart)} {orderSummary.items}
        </div>
        <div className="totalItems__price">
          {getTotalPrice(shoppingCart)} {currency}
        </div>
      </div>
      <div className="discounts">
        <p className="discounts__title">{orderSummary.discount}</p>
        <p className="discounts__row">
          <span>{orderSummary.twoPerOne}</span>
          <span className="discounts__row__price">
            -{twoPerOne} {currency}
          </span>
        </p>
        <p className="discounts__row">
          <span>{orderSummary.bulk}</span>
          <span className="discounts__row__price">
            -{bulkDiscount} {currency}
          </span>
        </p>
      </div>
      <div className="totalPrice">
        <p className="totalPrice__total">
          <span className="totalPrice__total__text">
            {orderSummary.totalCost}:
          </span>
          <span className="totalPrice__total__number">
            {total}
            {currency}
          </span>
        </p>
        <Button content={orderSummary.checkout} type="checkoutBtn" />
      </div>
    </aside>
  );
};

OrderSummary.propTypes = {
  className: PropTypes.string,
  orderSummary: PropTypes.object,
  currency: PropTypes.string,
  shoppingCart: PropTypes.array,
};

export default OrderSummary;
