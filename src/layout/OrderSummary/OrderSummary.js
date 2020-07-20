import React, { useEffect, useState } from "react";
import Checkout from "./Checkout";

const OrderSummary = ({ className, orderSummary, currency, shoppingCart }) => {
  const [twoPerOne, setTwoPerOne] = useState(0);
  const [bulkDiscount, setBulkDiscount] = useState(0);
  const [total, setTotal] = useState("");

  const getTotalProducts = () => {
    return shoppingCart.reduce((acc, product) => acc + product.quantity, 0);
  };

  const getPriceByCode = (code) => {
    return shoppingCart.find((prod) => prod.code === code);
  };

  const getTotalPrice = () => {
    return shoppingCart.reduce(
      (acc, prod) => (acc += prod.quantity * prod.price),
      0
    );
  };

  let pricingRules = (code, quantity) => {
    const price = getPriceByCode(code)?.price;
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
    shoppingCart.map((product) => {
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
          {getTotalProducts()} {orderSummary.items}
        </div>
        <div className="totalItems__price">
          {getTotalPrice()} {currency}
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
        <button className="totalPrice__checkoutBtn">
          {orderSummary.checkout}
        </button>
      </div>
    </aside>
  );
};

export default OrderSummary;
