import React, { useEffect } from "react";
import { connect } from "react-redux";
import { products } from "../../fixtures/products.json";
import { ShoppingCart, OrderSummary } from "../../layout";
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
      <ShoppingCart shoppingCart={shoppingCart} setCartAction={setCartAction} />
      <OrderSummary shoppingCart={shoppingCart} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingContainer);
