class CartPage {
  elements = {
    cartItems: () => cy.get('.cart_item'),
    cartItemNames: () => cy.get('.inventory_item_name'),
    checkoutButton: () => cy.get('[data-test="checkout"]'),
    firstNameInput: () => cy.get('[data-test="firstName"]'),
    lastNameInput: () => cy.get('[data-test="lastName"]'),
    postalCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    finishButton: () => cy.get('[data-test="finish"]'),
    successMessage: () => cy.get('.complete-header'),
  }

  clickCheckout() {
    this.elements.checkoutButton().click()
  }

  fillShippingInfo(firstName, lastName, postalCode) {
    this.elements.firstNameInput().type(firstName)
    this.elements.lastNameInput().type(lastName)
    this.elements.postalCodeInput().type(postalCode)
  }

  clickContinue() {
    this.elements.continueButton().click()
  }

  clickFinish() {
    this.elements.finishButton().click()
  }

  getSuccessMessage() {
    return this.elements.successMessage()
  }

  getCartItemNames() {
    return this.elements.cartItemNames()
  }
}

export default new CartPage()