const getTotalProducts = (shoppingCart) => {
  return shoppingCart.reduce((acc, product) => acc + product.quantity, 0);
};

const getTotalPrice = (shoppingCart) => {
  return shoppingCart.reduce(
    (acc, prod) => (acc += prod.quantity * prod.price),
    0
  );
};
const getProductByCode = (shoppingCart, code) => {
  return shoppingCart.find((prod) => prod.code === code);
};

export { getTotalProducts, getTotalPrice, getProductByCode };
