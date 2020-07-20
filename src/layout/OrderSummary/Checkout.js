class Checkout {
  constructor(pricingRules) {
    this.pricingRules = pricingRules;
    this.products = {};
  }

  scan(code) {
    if (this.products[code]) {
      this.products[code] = this.products[code] + 1;
    } else {
      this.products[code] = 1;
    }
  }

  total() {
    return Object.keys(this.products).reduce(
      (acc, key) => (acc += this.pricingRules(key, this.products[key])),
      0
    );
  }
}

export default Checkout;
