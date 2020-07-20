import React, { useEffect } from "react";
import { connect } from "react-redux";
import { products } from "../../fixtures/products.json";
import { ShoppingCart, OrderSummary } from "../../layout";
import { categories, currency, orderSummary, shoppingTexts } from "../../language/en_US";
import { setCartAction } from "../../redux/actions/shoppingCart/shoppingCartActions";

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCartReducer.shoppingCart,
});
const mapDispatchToProps = (dispatch) => ({
  setCartAction: (products) => dispatch(setCartAction(products)),
});

const ShoppingContainer = ({ className, shoppingCart, setCartAction }) => {
  useEffect(() => {
    setCartAction(products);
  }, [setCartAction]);

  return (
    <div className={className}>
      <ShoppingCart
        categories={categories}
        currency={currency}
        shoppingTexts={shoppingTexts}
        shoppingCart={shoppingCart}
        setCartAction={setCartAction}
      />
      <OrderSummary
        orderSummary={orderSummary}
        currency={currency}
        shoppingCart={shoppingCart}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingContainer);
