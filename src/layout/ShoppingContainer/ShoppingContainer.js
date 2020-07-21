import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { products } from "../../fixtures/products.json";
import { ShoppingCart, OrderSummary } from "../../layout";
import {
  categories,
  currency,
  orderSummary,
  shoppingTexts,
} from "../../language/en_US";
import { setCartAction } from "../../redux/actions/shoppingCart/shoppingCartActions";
import { ProductModal } from "../../commons";
import { getProductByCode } from "../../utils/productFunctions";

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCartReducer.shoppingCart,
});
const mapDispatchToProps = (dispatch) => ({
  setCartAction: (products) => dispatch(setCartAction(products)),
});

const ShoppingContainer = ({ className, shoppingCart, setCartAction }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [actualProduct, setActualProduct] = useState(null);
  useEffect(() => {
    setCartAction(products);
  }, [setCartAction]);
  const openProductModal = (code) => {
    setActualProduct(getProductByCode(shoppingCart, code));
    setToggleModal(!toggleModal);
  };
  return (
    <div className={className}>
      {toggleModal && (
        <ProductModal
          shoppingTexts={shoppingTexts}
          actualProduct={actualProduct}
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          currency={currency}
        />
      )}
      <ShoppingCart
        categories={categories}
        currency={currency}
        shoppingTexts={shoppingTexts}
        shoppingCart={shoppingCart}
        setCartAction={setCartAction}
        openProductModal={openProductModal}
      />
      <OrderSummary
        orderSummary={orderSummary}
        currency={currency}
        shoppingCart={shoppingCart}
      />
    </div>
  );
};

ShoppingContainer.propTypes = {
  className: PropTypes.string,
  shoppingCart: PropTypes.array,
  setCartAction: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingContainer);
