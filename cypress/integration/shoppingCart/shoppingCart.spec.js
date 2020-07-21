/// <reference types="cypress" />

context("Shopping Cart", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should decrement product quantity", () => {
    cy.get("[data-cy=input-quantity-X7R2OPX]").should("have.value", 1);
    cy.get("[data-cy=cart-item-number]").contains("3");
    cy.get("[data-cy=cart-price]").contains("35");
    cy.get("[data-cy=cart-item-with-discount]").contains("35");

    cy.get("[data-cy=subtract-button-X7R2OPX]").click();

    cy.get("[data-cy=input-quantity-X7R2OPX]").should("have.value", 0);
    cy.get("[data-cy=cart-item-number]").contains("2");
    cy.get("[data-cy=cart-price]").contains("15");
    cy.get("[data-cy=cart-item-with-discount]").contains("15");
  });

  it("should increment product quantity", () => {
    cy.get("[data-cy=input-quantity-X7R2OPX]").should("have.value", 1);
    cy.get("[data-cy=cart-item-number]").contains("3");
    cy.get("[data-cy=cart-price]").contains("35");
    cy.get("[data-cy=cart-item-with-discount]").contains("35");

    cy.get("[data-cy=add-button-X7R2OPX]").click();

    cy.get("[data-cy=input-quantity-X7R2OPX]").should("have.value", 2);
    cy.get("[data-cy=cart-item-number]").contains("4");
    cy.get("[data-cy=cart-price]").contains("55");
    cy.get("[data-cy=cart-item-with-discount]").contains("55");
  });

  it("should change product quantity", () => {
    cy.get("[data-cy=input-quantity-X7R2OPX]").should("have.value", 1);
    cy.get("[data-cy=cart-item-number]").contains("3");
    cy.get("[data-cy=cart-price]").contains("35");
    cy.get("[data-cy=cart-item-with-discount]").contains("35");

    cy.get("[data-cy=input-quantity-X7R2OPX]").clear().type(2);

    cy.get("[data-cy=cart-item-number]").contains("4");
    cy.get("[data-cy=input-quantity-X7R2OPX]").should("have.value", 2);
    cy.get("[data-cy=cart-price]").contains("55");
    cy.get("[data-cy=cart-item-with-discount]").contains("55");
  });

  it("should apply bulk discount", () => {
    cy.get("[data-cy=cart-price]").contains("35");
    cy.get("[data-cy=cart-item-with-discount]").contains("35");
    cy.get("[data-cy=bulk-discount]").contains("0");

    cy.get("[data-cy=input-quantity-X7R2OPX]").clear().type(4);

    cy.get("[data-cy=cart-price]").contains("95");
    cy.get("[data-cy=cart-item-with-discount]").contains("91");
    cy.get("[data-cy=bulk-discount]").contains("4");
  });

  it("should apply 2 per 1 discount", () => {
    cy.get("[data-cy=cart-price]").contains("35");
    cy.get("[data-cy=cart-item-with-discount]").contains("35");
    cy.get("[data-cy=two-per-one]").contains("0");

    cy.get("[data-cy=input-quantity-X2G2OPZ]").clear().type(4);

    cy.get("[data-cy=cart-price]").contains("50");
    cy.get("[data-cy=cart-item-with-discount]").contains("40");
    cy.get("[data-cy=two-per-one]").contains("10");
  });

  it("should open modal", () => {
    cy.get("[data-cy=modal-X7R2OPX]").should("not.exist");

    cy.get("[data-cy=product-open-modal-X7R2OPX]").click();

    cy.get("[data-cy=modal-X7R2OPX]").should("exist");
  });

  it("should close modal", () => {
    cy.get("[data-cy=product-open-modal-X7R2OPX]").click();
    cy.get("[data-cy=modal-X7R2OPX]").should("exist");
    cy.get("[data-cy=close-modal-X7R2OPX]").click();
    cy.get("[data-cy=modal-X7R2OPX]").should("not.exist");
  });
});
