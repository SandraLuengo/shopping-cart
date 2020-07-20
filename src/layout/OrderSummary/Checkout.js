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
    this.pricingRules(this.products);
  }
}

export default Checkout;
